function REGISTRO() {
	var matricula = document.registro.matricula.value;
	var nome = document.getElementById('nome').value;
	var tipousuario = document.getElementById('tipousuario').value;
	var email = document.getElementById('email').value;
	var senha = document.getElementById('senha').value;
	var xmlhttp = new XMLHttpRequest();

  if( (matricula !="") && (nome !="") && (tipousuario !="Selecione o tipo de usuário") && (email !="") && (senha !="")){
      	xmlhttp.onreadystatechange=function() {
    		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
    			window.alert("Os dados foram enviados com sucesso.");
    			window.location.reload();
    			}
    		if (xmlhttp.readyState==4 && xmlhttp.status>=400) {
    			window.alert("Ocorreu algum erro. Atualize a página e tente novamente.");
    			window.location.reload();
    			}
    	}
      xmlhttp.open("POST", "http://www.smartsoft.com.br/webservice/restifydb/Employees/diw_cadastro_usuario", true);
    	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    	xmlhttp.send('_data={"matricula": "'+ matricula +'", "nome": "'+nome+'", "tipo": "'+tipousuario+'", "email": "'+email+'", "senha":"'+senha+'"}');
    }

    else {
      alert("Preencha o campo vazio");
    }
}
