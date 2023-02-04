console.log("Olá Mundo")


let email = document.getElementById('email');
let senha = document.getElementById('senha');

function redirecionar() {
  window.event.preventDefault()
  if (email.value == email.value !== ''){
    if (senha.value == senha.value !== ''){
      alert("Bem Vindo ao Mentor");
      window.location.replace('../perfil.html')
      
    }
    
  }else{
    alert('E-mail ou senha inválidos!')
  }
  
  
};


