//Test potion creation
for (let i = 0; i < 50; i++) {
  const test = createPotion([woolsworth, dragonEgg, zoraScale, zoraScale], i);
  console.log(test.color);
  const display = renderPotionEle(test);
  console.log(display);
  document.querySelector('.potion-container').appendChild(display);
}