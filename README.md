# Basic-Raytracer

## Overview

I built this mostly because people told me not to. They told me that javascript would never be able to handle something so intensive as raytracing, but I decided to try it anyways.

Right now it only supports the simplest case (spheres), but I'llprobably add more object types in the future.

## How to Run

Install [XAMPP](http://sourceforge.net/projects/xampp/) or Apache or any other directory-based hosting tool you want.

Add the HTML and JS files from this project into the hosted directory.

Navigate to raytracer.html

## Setting the Scene

In scene.js, add or remove spheres and/or lights.

Spheres require a point, a radius, and a material.

Lights require a point and the 3 color components, specified in the order r, g, b, each between 0 and 1.

Points require x, y, and z coordinates.

Materials require an albedo (reflectivity constant), and red, green, and blue color components.
