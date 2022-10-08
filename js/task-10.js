function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsRef = document.querySelector('#controls')
const inputRef = controlsRef.children[0];
const btnCreateRef = controlsRef.children[1];
const btnDestroyRef = controlsRef.children[2];
const boxContainer = document.querySelector('#boxes')

let firstBox

function createBoxes(amount) {
  let calcPixel = 20;
  for (let i = 1; i <= amount; i += 1) {
    calcPixel += 10;
    firstBox = document.createElement('div')
    firstBox.style.width = `${calcPixel}px`
    firstBox.style.height = `${calcPixel}px`
    firstBox.style.backgroundColor = `${getRandomHexColor()}`
    boxContainer.append(firstBox)
  }
}

function destroyBoxes() {
boxContainer.innerHTML = ''
}

btnCreateRef.addEventListener('click', () => {
  createBoxes(inputRef.valueAsNumber)
})
btnDestroyRef.addEventListener('click', () => {
  destroyBoxes() 
})

