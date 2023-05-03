const nome = document.getElementById('name'), email = document.getElementById('email'), form = document.getElementById('form'), erro = document.getElementById('erro');

form.addEventListener('submit', (event)=>{
//   alert('Hello Mundo!')
    let messages = []
    if(nome.value === '' || nome.value === null){
        messages.push('O campo nome é obrigatório').join('');
    }
    if(email.value === '' || email.value === null){
        messages.push('O campo e-mail é obrigatório').join('');
    }
});