const formRef = document.querySelector('.login-form')

formRef.addEventListener('submit', (event) => {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Усі поля повинні бути заповнені!')
    }

    const data = {
        email: email.value,
        password: password.value,
    };
    console.log(data)
    formRef.reset();
    
///// formData //////
     // const formData = new FormData(event.target);
    // const formDataSend = {};
    // formData.forEach((value, key) => {
    //     formDataSend[key] = value;
    // })
    // console.log(formDataSend)    
})

