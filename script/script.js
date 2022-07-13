let slider = document.querySelector('#slider');
let button = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@';
let novaSenha = '';

sizePassword.innerHTML = slider.value;


slider.oninput = function(){
  sizePassword.innerHTML = this.value;
}

function generatePassword(){

  let pass = '';

  for(let i = 0,n = charset.length; i < slider.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n)); 
  }
  containerPassword.classList.remove('hide')
  password.innerHTML = pass;
  novaSenha = pass;
  console.log(novaSenha)
}

function copyPassword(){
  navigator.clipboard
  .writeText(novaSenha)
  .then(() => {
    alert("Senha Copiada com Sucesso!");
  })
  .catch(() => {
    alert("Ops! Algo deu Errado.");
  });  
  console.log(novaSenha)
}

