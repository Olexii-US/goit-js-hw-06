let counterValue = 0;

const buttonDecr = document.querySelector('[data-action="decrement"]')
const buttonIncr = document.querySelector('[data-action="increment"]')
const valueRef = document.querySelector('#value')

buttonDecr.addEventListener('click', () => {
    counterValue -= 1;
    return valueRef.textContent = counterValue;
})

buttonIncr.addEventListener('click', () => {
    counterValue += 1;
    return valueRef.textContent = counterValue;
})





