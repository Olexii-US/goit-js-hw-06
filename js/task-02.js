const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients')

const listItems = ingredients.map(item => {
  const itemsRef = document.createElement('li');
  itemsRef.textContent = item;
  itemsRef.classList.add('item');
  return itemsRef;
})

listRef.append(...listItems)

