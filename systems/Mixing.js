
class Color {
  constructor(name, purity, contains) {
    this.name = name;
    this.purity = purity;
    this.contains = contains;
  }
}

const white = new Color('white', 4, []);
const black = new Color('black', 5, []);
const brown = new Color('brown', 5, []);

const red = new Color('red', 3, []);
const yellow = new Color('yellow', 3, []);
const blue = new Color('blue', 3, []);

const orange = new Color('orange', 2, [red, yellow]);
const green = new Color('green', 2, [yellow, blue]);
const violet = new Color('violet', 2, [blue, red]);

const yellowOrange = new Color('yellow-orange', 1, [orange, yellow]);
const yellowGreen = new Color('yellow-green', 1, [green, yellow]);
const blueGreen = new Color('blue-green', 1, [green, blue]);
const blueViolet = new Color('blue-violet', 1, [violet, blue]);
const redViolet = new Color('red-violet', 1, [violet, red]);
const redOrange = new Color('red-orange', 1, [orange, red]);

const COLORS = {
  white,
  black,
  brown,

  red,
  yellow,
  blue,

  orange,
  green,
  violet,

  yellowOrange,
  yellowGreen,
  blueGreen,
  blueViolet,
  redViolet,
  redOrange,
}


function generateColor(reactants) {
  /* FLATTEN COLORS */

  let baseColors = [];
  reactants.map(reactant => {
    baseColors.push(reactant.color);
  });

  //TODO generate more colors based on potency of reactant

  let weightedColors = [];
  baseColors.map(color => {
    if (color.contains.length !== 0) {
      color.contains.map(innerColor => {
        weightedColors.push(innerColor);
      });
    } else {
      weightedColors.push(color);
    }
  });

  /* BROWN OR BLACK */

  let brownCount = 0;
  let blackCount = 0;
  let pureColors = [];

  weightedColors.map(color => {
    if (color === brown) {
      brownCount++; 
    } else if (color === black) {
      blackCount++;
    } else {
      pureColors.push(color);
    }
  });

  const percentage = (amount, total) => {
    return (amount / total) * 100;
  }

  if (
    percentage(
      brownCount + blackCount,
      weightedColors.length)
    > 20)
  {
    if (brownCount > (blackCount + 1)) {
      return COLORS.brown;
    } else {
      return COLORS.black;
    }
  }

  // TODO if too many different colors, generate brown

  /* SELECT COLOR POOL */

  function randPercent() {
    return Math.floor(Math.random() * 100);
  }

  const orderedPure = pureColors.sort((a, b) => {
    return a.purity + b.purity;
  });

  let colorPool = [];

  // By chance, weighted by purity, possibility to pick a new color
  orderedPure.some(color => {
    const rand = randPercent();
    if (colorPool.length > 3) { return false } 
    if (rand > percentage(color.purity, 5)) {
      colorPool.push[color]
    }
  });

  /* MIX COLOR POOL */
  // TODO This is complicated...

  //Random from color pool from now
  return pureColors[Math.floor(Math.random() * pureColors.length)];
}

