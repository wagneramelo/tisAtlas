function LOGIN(){
  var valor_login = document.login.matricula.value;
  var valor_senha = document.login.senha.value;
  if ((valor_login !="") && (valor_senha !="")) {
    ExecutaAjax();
  }
  else {
    alert("Verifique se todos os campos estão preenchidos corretamente.");
  }
}
var xmlhttp = new XMLHttpRequest();
function processarRequisicao() { //Função para processar a requisição
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
    var logindigitado = document.login.matricula.value;
    var senhadigitada = document.login.senha.value;
    var a = JSON.parse(xmlhttp.responseText);
    var num = a.restify.rows.length;
    for (j = 0; j < num; j++) {
      var id = a.restify.rows[j].values.id.value;
      var login = a.restify.rows[j].values.matricula.value;
      var senha = a.restify.rows[j].values.senha.value;
      if ((login==logindigitado) && (senha==senhadigitada)) {
            j=num;
             window.location="index.html";
      } //FIM SE
    } //fIM FOR
    if ((login != logindigitado) || (senha != senhadigitada))  {
        alert("Usuário ou senha incorretos, tente novamente");
    } //fim se


  } // fim se

} // fim funcao


function ExecutaAjax() { //Função para Executar o Ajax
  xmlhttp.onreadystatechange = processarRequisicao;
  xmlhttp.open("GET", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_cadastro_usuario", true);
  xmlhttp.send();
}
