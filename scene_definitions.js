/*Scene components*/
var Material = function(ref, r, g, b) {
    var self = {
        reflection: ref,
        red: r,
        green: g,
        blue: b
    };
    return self;
};

var Sphere = function(pos, r, mat){
	var self = {
		position: pos,
		radius: r,
		material: mat
	};
	return self;
};

var Light = function(pos, r, g, b){
	var self = {
		position: pos,
		red: r,
		green: g,
		blue: b
	};
	return self;
};

var Ray = function(start, dir){
	var self = {
		start: start,
		direction: dir
	};
    return self;
};