class Potion {
  constructor(uuid, color, potency) {
    this.uuid = uuid;
    this.color = color;
    this.potency = potency;
    this.price = this.calcPrice();
  }

  get name() {
    return `${namedPotency()} ${this.color.charAt(0).toUpperCase()} Potion`
  }

  namedPotency() {
    if (this.potency < 3) {
      return 'Weak';
    } else if (this.potency < 6) {
      return 'Medium';
    } else if (this.potency > 6) {
      return 'Strong';
    }
  }

  calcPrice() {
    // This is a placeholder and will eventually get more complicated.
    return this.potency * 10;
  }
}

const testPotion = new Potion(1, COLORS.yellowGreen, 5);

console.log(generateColor([testPotion, cirtBerry, cirtBerry, cirtBerry]));

function createPotion(reactants) {
  
}