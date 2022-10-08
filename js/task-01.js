const mainList = document.querySelector('#categories');

const mainListLength = mainList.children.length;
console.log('Number of categories:', mainListLength)

const mainListItems = document.querySelectorAll('.item')

const ListItems = mainListItems.forEach(function (item) {
    console.log('Category:', item.firstElementChild.textContent)
    console.log('Elements:', item.lastElementChild.childElementCount)
})
