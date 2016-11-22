function LOGIN(){
  var user=document.login.matricula.value;
  var password=document.login.senha.value;
  if( (user !="") && (password !="")){
    if (user==111111 && password=="pucminas") { window.location="index.html";}
    else{
      alert("Senha ou usuário inválido.")
    }
  }

  else {
      alert("Verifique se todos os campos estão preenchidos.");
  }
}
