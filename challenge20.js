const PI = 3.14159 

const sphereVolume = function (radius) {
  return 4 / 3 * PI * Math.pow(radius,3);
}

const coneVolume = function (radius, height) {
  return PI * Math.pow(radius, 2) * height / 3
}

const prismVolume = function (height, width, depth) {
  return height * width * depth;
}

const getVolume = (solid) => {
  switch(solid.type){
    case 'sphere': return sphereVolume(solid.radius);
    case 'cone': return coneVolume(solid.radius, solid.height);
    case 'prism': return prismVolume(solid.height, solid.width, solid.depth);
    default: return 0;
  }
}

const totalVolume = function (solids) {
  return solids.reduce((acc, solid) => acc + getVolume(solid), 0)
}