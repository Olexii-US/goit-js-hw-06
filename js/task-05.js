const inputRef = document.querySelector('#name-input')
const userNameRef = document.querySelector("#name-output")

inputRef.addEventListener('input', (event) => {
    const inpitValue = event.currentTarget.value
    userNameRef.textContent = 'Anonymous'
    if (inpitValue !== "") {
        userNameRef.textContent = inpitValue
    } 
})

