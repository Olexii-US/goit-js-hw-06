const inputRef = document.querySelector("#font-size-control")
const textRef = document.querySelector('#text')

inputRef.addEventListener('input', (event) => {
    const textSize = event.currentTarget.valueAsNumber
    textRef.style.fontSize = `${textSize}px`    
})
