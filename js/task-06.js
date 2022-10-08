const inputRef = document.querySelector('#validation-input')

const inputBaseLength = Number(inputRef.getAttribute('data-length'))
// const inputBaseLength = Number(inputRef.dataset.length)

inputRef.addEventListener('blur', () => {
    if (inputRef.value.length === inputBaseLength) {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid')
    } else {
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid')
    }    
})

