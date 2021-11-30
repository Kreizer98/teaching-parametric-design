const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;


const main = () => {
  const cubeShape = cube({size: 5});
  const cubeShape1 = cube({size: 3});
  const sphereShape = sphere({radius: 4});

  const cubes = [];
  const cubes1 = [];
  const spheres = [];

  for (let x = 0; x < 10; x +=1){
    for (let y = 0; y < 10; y +=1){
      for (let z = 0; z < 10; z +=1){
      cubes.push(translate(
        [y*15, x*15, z*15],
        cubeShape
      ));

      cubes1.push(translate(
        [y*15 +2, x*15 +2, z*15 +2],
        cubeShape1
      ));

      }
    }
  }

  for (let x = 0; x < 9; x +=1){ //extra loop for spheres to 9
    for (let y = 0; y < 9; y +=1){
      for (let z = 0; z < 9; z +=1){

        spheres.push(translate(
          [y*15 +7, x*15 +7, z*15 +7],
          sphereShape
        ));

      }
    }
  }

  //const unionShape = subtract([cubes, cubes1]);
  

  return [ spheres/*, unionShape*/, cubes];
};







module.exports = { main };