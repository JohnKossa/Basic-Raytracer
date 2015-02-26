var raytracer = (function(domString){
    var hitSphere = function (ray, sphere, t) {
		var dist = sphere.position.subtractPoint(ray.start);
		var B = ray.direction.dotProduct(dist);
		var D = B * B - (dist.dotProduct(dist)) + (sphere.radius * sphere.radius);
		if(D < 0)
			return {hit: false, t: -1};
		var t0 = B - Math.sqrt(D);
		var t1 = B + Math.sqrt(D);
		if((t0 > .1) && (t0 < t)){
			return{
				hit: true,
				t: t0
			};
		}
		if((t1 > .1) && (t1 < t)){
			return{
				hit: true,
				t: t1
			};
		}
		return {
			hit: false,
			t: -1
		};
	};
	
	var draw = function(){
	    var canvas = document.getElementById(domString);
		var context = canvas.getContext("2d");
		for(var y = 0; y<scene.sizeY; y++){
			for(var x = 0; x<scene.sizeX; x++){
				var red = 0, green = 0, blue = 0;
				var coef = 1;
				var level = 0;
				var viewRay = new Ray(new Point(x, y, -1000), new Vector(0, 0, 1));
				do{
					var t = 2000;
					var currentSphere = -1;
					for(var i = 0; i < scene.spheres.length; i++){
						var hitTest = hitSphere(viewRay, scene.spheres[i], t);
						if(hitTest.hit){
							t = hitTest.t;
							currentSphere = i;
						}
					}
					if(currentSphere == -1)
						break;
					var newStart = viewRay.start.addVector(viewRay.direction.scale(t));
					var normal = newStart.subtractPoint(scene.spheres[currentSphere].position);
					var temp = normal.dotProduct(normal);
					if(temp == 0)
						break;
					temp = 1/Math.sqrt(temp);
					normal = normal.scale(temp);
					var currentMaterial = scene.spheres[currentSphere].material;
					for(var j = 0; j<scene.lights.length;j++){
						var current = scene.lights[j];
						var dist = current.position.subtractPoint(newStart);
						if(normal.dotProduct(dist) <= 0)
							continue;
						var t = Math.sqrt(dist.dotProduct(dist));
						if(t <= 0)
						    continue;
						var lightRay = new Ray(newStart, dist.scale(1/t));
						var inShadow = false;
						for(var i = 0; i<scene.spheres.length;i++){
							var hitTest = hitSphere(lightRay, scene.spheres[i],t);
							if(hitTest.hit){
								inShadow = true;
								break;
							}
						}
						if(!inShadow){
							var lambert = lightRay.direction.dotProduct(normal) * coef;
							red += lambert * current.red * currentMaterial.red;
							green += lambert * current.green * currentMaterial.green;
							blue += lambert * current.blue * currentMaterial.blue;
						}
					}
					coef = coef * currentMaterial.reflection;
					var reflect = 2 * (viewRay.direction.dotProduct(normal));
					viewRay.start = newStart;
					viewRay.direction = viewRay.direction.subtractVector(normal.scale(reflect));
					level++;
				} while ((coef > 0) && (level < 10));
				red = Math.min(red, 1);
				green = Math.min(green, 1);
			    blue = Math.min(blue, 1);
				var redString = Math.floor(red * 255).toString(16);
			    redString = redString.length < 2 ? "0" + redString : redString;
			    var greenString = Math.floor(green * 255).toString(16);
			    greenString = greenString.length < 2 ? "0" + greenString : greenString;
			    var blueString = Math.floor(blue * 255).toString(16);
			    blueString = blueString.length < 2 ? "0" + blueString : blueString;
				var colorstring = '#' + redString + greenString + blueString;
			    context.fillStyle = colorstring;
				//draw to image
				context.fillRect(x, y, 1, 1);
			    //console.log("(" + x + "," + y + ","+colorstring+")");
			}
		}
	};
	return {draw:draw};
})("myCanvas");
