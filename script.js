const root = document.documentElement;
const formElement = document.querySelectorAll('input')
const submitButton = document.querySelector('.submit')

const password1 = document.querySelector('#password1')
const password2 = document.querySelector('#password2')

function passwordCheck() {
    let password1Value = password1.value;
    let password2Value = password2.value;

    if(!password1Value && !password2Value) {
        password1.style.border = '2px solid #AAAAAA';
        password1.previousElementSibling.style.color = '#2A623D';
        password2.style.border = '2px solid #AAAAAA';
        password2.previousElementSibling.style.color = '#2A623D';
    }
    else if(!password2Value) {
        password1.style.border = '2px solid green';
        password1.previousElementSibling.style.color = 'green';
    } else if(password1Value !== password2Value) {
        password1.style.border = '1px solid red';
        password1.previousElementSibling.style.color = 'red'
        password2.style.border = '1px solid red';
        password2.previousElementSibling.style.color = 'red';
    } else {
        password1.style.border = '2px solid green';
        password1.previousElementSibling.style.color = 'green';
        password2.style.border = '2px solid green';
        password2.previousElementSibling.style.color = 'green';
    }
}


password1.addEventListener('input', () => {
    passwordCheck()
})

password2.addEventListener('input', () => {
    passwordCheck()
})

formElement.forEach((input) => {
    input.addEventListener('focus', () => {
        input.classList.add('focus')
    });

    input.addEventListener('blur', () => {
        input.classList.remove('focus')
    });
});