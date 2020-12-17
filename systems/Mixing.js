
class Color {
  constructor(name, purity, contains, basehex, shadowhex) {
    this.name = name;
    this.purity = purity;
    this.contains = contains;

    this.basehex = basehex;
    this.shadowhex = shadowhex;
  }
}

const white = new Color('white', 4, [], '#ebf2f2', '#b8bfbf');
const black = new Color('black', 5, [], '#453a42', '#1c1a1b');
const brown = new Color('brown', 5, [], '#73462a', '#452924');

const red = new Color('red', 3, [], '#e31235', '#8f136e');
const yellow = new Color('yellow', 3, [], '#e3d966', '#c28917');
const blue = new Color('blue', 3, [], '#2cbde6', '#2c50ab');

const orange = new Color('orange', 2, [red, yellow], '#d6931e', '#b85423');
const green = new Color('green', 2, [yellow, blue], '#5ebd2f', '#308069');
const violet = new Color('violet', 2, [blue, red], '#a457d4', '#9c3582');

const yellowOrange = new Color('yellow-orange', 1, [orange, yellow], '#f7bd1e', '#d67d09');
const yellowGreen = new Color('yellow-green', 1, [green, yellow], '#bee026', '#6aba2d');
const blueGreen = new Color('blue-green', 1, [green, blue], '#2dd67c', '#20a181');
const blueViolet = new Color('blue-violet', 1, [violet, blue], '#532bcc', '#681a9c');
const redViolet = new Color('red-violet', 1, [violet, red], '#cc1bae', '#681a9c');
const redOrange = new Color('red-orange', 1, [orange, red], '#e63d1c', '#b3253f');

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

  // TODO if too many different colors and not a strong amount of another color, generate brown

  /* SELECT COLOR POOL */

  function randPercent() {
    return Math.floor(Math.random() * 100);
  }

  const orderedPure = pureColors.sort((a, b) => {
    return a.purity + b.purity;
  });

  let colorPool = [];

  // By chance, weighted by purity, giving more possibility to least pure, possibility to pick a new color
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



/* POTENCTY */

function generatePotency(reactants) {
  const prices = reactants.map(reactant => (reactant.potency));
  const sum = prices.reduce((a, b) => a + b);

  const rand = Math.floor(Math.random() * 5);
  const randSign = Math.floor(Math.random() * 2);

  if (randSign >= 2) {
    rand = -rand;
  }
  return (sum / reactants.length) + rand;
}
