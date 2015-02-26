var scene = (function () {
    var self = {
        spheres: [],
        lights: [],
        sizeX: -1,
        sizeY: -1
    };
    self.sizeX = 600;
    self.sizeY = 600;
    self.spheres.push(new Sphere(new Point(100, 500, 0), 100, new Material(.95, .3, 0, 0)));
    self.spheres.push(new Sphere(new Point(500, 500, 0), 100, new Material(.95, 0, .3, 0)));
    self.spheres.push(new Sphere(new Point(100, 100, 0), 100, new Material(.95, 0, 0, .3)));
    self.spheres.push(new Sphere(new Point(500, 100, 0), 100, new Material(.95, .3, .3, 0)));
    self.spheres.push(new Sphere(new Point(300, 300, 100), 100, new Material(0, 1, 1, 1)));
    self.lights.push(new Light(new Point(500, -1000, -100), 1, 1, 1));
    self.lights.push(new Light(new Point(640, 240, -10000), .8, .8, .8));
    //self.lights.push(new Light(new Point(320, 140, 1000, 1, 1, 1)));
    return self;
})();