class Ingredient {
  constructor(id, name, color, potency) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.potency = potency;
  }
}

/* Ingredients */

const woolsworth = new Ingredient(1, 'Woolsworth', COLORS.orange, 1);
const breth = new Ingredient(2, 'Breth', COLORS.yellow , 3);
const dragonEgg = new Ingredient(3, 'Dragon Egg', COLORS.green, 5);
const zoraScale = new Ingredient(4, 'Zora Scale', COLORS.blueGreen, 1);
const cirtBerry = new Ingredient(5, 'Cirt Berry', COLORS.yellowOrange, 1);