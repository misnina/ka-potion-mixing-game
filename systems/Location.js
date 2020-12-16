//Whoops started doing this when it's not the phase yet.

class Location {
  constructor(id, name, ingredients) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this._rarityTable = autoCalcRarityTable();
  }

  autoCalcRarityTable() {
    return this.ingredients.map(ingredient => (
      {
        ingredient,
        rarity: (10 - ingredient.potency) * 0.10,
      }
    ));
  }

  get rarityTable() {
    return this._rarityTable;
  }

  /*
    EXAMPLE:
    [
      {
        ingredient: {
          id: 1,
          name: 'woolworth'
          color: 'red',
          potency: 3,
          price: 30,
        },
        rarity: .70,
      },
      {
        ingredient: {
          id: 2,
          name: 'bleth',
          color: 'blue',
          potency: 5,
          price: 50,
        },
        rarity: .50,
      },
    ]

  */
  set rarityTable(rTable) {
    this._rarityTable = rTable;
  }
}