//Test potion creation
function testPotions() {
  for (let i = 0; i < 50; i++) {
    const test = createPotion([woolsworth, cirtBerry, zoraScale, dragonEgg], i);
    document.querySelector('#potion-container').appendChild(test.renderPotionEle());
  }
}

testPotions();

//test ingredients
function testIngredients() {
  for (let i = 0; i < 20; i++) {
    let id = i + 1;
    if (i < 10) {
      id = `0${i + 1}`
    }

    const item = document.createElement('div');
    item.classList.add('ingredient');
    item.style.background = `url(./svg/${id}.svg)`;

    const amountIndicator = document.createElement('div');
    amountIndicator.classList.add('badge');
    const rand = Math.round(Math.random() * 10);
    amountIndicator.innerHTML = rand;
    item.appendChild(amountIndicator);

    document.querySelector('#ingredient-container').appendChild(item);
  }
}

testIngredients();

const modalBg = document.querySelector('.modal');
const info = document.querySelector('#information');
const infoButton = document.querySelector('#modal-button');

infoButton.addEventListener('click', () => {
  modalBg.style.display = 'flex';
  info.style.display = 'block';
});

window.addEventListener('click', (evt) => {
  if (evt.target === modalBg) {
    modalBg.style.display = 'none';
    info.style.display = 'none';
  }
})