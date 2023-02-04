console.log("Olá Mundo")


let email = document.getElementById('email');
let novamente = document.getElementById('novamente');
let form = document.querySelector('form');
let senha = document.getElementById('senha');
let senhaNovamente = document.getElementById('senha-novamente')

function redirecionar() {
  window.event.preventDefault()
  if (email.value == novamente.value && email.value !== ''){
    if (senha.value == senhaNovamente.value && senha.value !== ''){
      alert("Bem Vindo ao BikeSpot");
      window.location.replace('../index.html')
      
    }else{
      alert("As senhas não correspondem!")
    }
  }else{
    alert('E-mail inválido!')
  }
  
  
};


