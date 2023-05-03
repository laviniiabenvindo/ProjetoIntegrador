const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const messageError = document.getElementById('erro');

form.addEventListener('submit', (event) => {
    let messages = [];
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{10,16}$/;

    if(email.value === '' || email.value === null){
        messages.push('O campo e-mail é obrigatório');
    }
    else if(password.value.length <= 8){
        messages.push('A senha tem que ter mais de 8 caracteres');
    }
    else if(!regex.test(password.value)){
        messages.push('Precisa ter uma letra e maiúcula e minúscula, caractere especial e número');
    }
    else if(messages.length > 0){
        event.preventDefault();
        messageError.innerHTML = messages.join(''); 
    }
});