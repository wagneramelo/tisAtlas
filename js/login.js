function LOGIN(){
  var usernumber=document.login.matricula.value;
  usernumber=usernumber.toLowerCase();
  var password=document.login.senha.value;
  password=password.toLowerCase();
  if (usernumber==111111 && password=="pucminas") { window.location="index.html";}
  else{
    alert("Senha ou Usuário inválido")
    window.location.reload();
  }
}
