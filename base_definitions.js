/*Base Components*/
var Point = function(x,y,z){
	var self = {
		x: NaN || x,
		y: NaN || y,
		z: NaN || z
	};
	self.addVector  = function(vector){
		return new Point(self.x + vector.x, self.y + vector.y, self.z + vector.z);
	};
	self.subtractVector  = function(vector){
		return new Point(self.x - vector.x, self.y - vector.y, self.z - vector.z);
	};
	self.subtractPoint = function(other){
		return new Vector(self.x - other.x, self.y - other.y, self.z - other.z);
	};
	return self;
}

var Vector = function(x, y, z){
	var self = {
		x: NaN || x,
		y: NaN || y,
		z: NaN || z
	};
	self.addVector = function (other){
		return new Vector(self.x + other.x, self.y + other.y, self.z + other.z);
	};
	self.subtractVector = function (other){
		return new Vector(self.x - other.x, self.y - other.y, self.z - other.z);
	};
	self.scale = function(factor){
		return new Vector(factor * self.x, factor * self.y, factor * self.z);
	};
	self.dotProduct = function(other){
		return ((self.x * other.x) + (self.y * other.y) + (self.z * other.z));
	};	
	return self;
}

var Color = function(r, g, b){
	var self = {
		red: r,
		green: g,
		blue: b
	};
	self.addColor = function(other){
		return new Color(self.red + other.red, self.green + other.green, self.blue + other.blue);
	};
	self.timesColor = function(other){
		return new Color(self.red * other.red, self.green * other.green, self.blue * other.blue);
	};
	self.scale = function(factor){
		return new Color(self.red * factor, self.green * factor, self.blue * factor);
	};
	return self;
};