const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;


const main = () => {

  // function randNum(addition) {
  //   return Math.floor(Math.random() * 10) + addition;
  // }

  const randNum = () => Math.round(Math.random() * 4) + 5   // => arrow function für ganze Zeile https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

  const cubes = [];

  for (let x = 0; x < 5; x +=1){
    for (let y = 0; y < 5; y +=1){

      let height = randNum()
      const cubeShape = cuboid({size: [5, 5, height]});
      cubes.push(translate(
        [y*6, x*6, height / 2],
        cubeShape
      ));

    }
  }

  const objects = cuboid({size: [30, 30, 1]});

  const transformed = translate(
    [12, 12, 0],
    objects
  );



  

  return [cubes, transformed];
};







module.exports = { main };