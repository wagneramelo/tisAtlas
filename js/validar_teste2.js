function Resposta_teste(){
  var resposta1=document.getElementById('resposta1').value;
  var resposta2=document.getElementById('resposta2').value;
  var resposta3=document.getElementById('resposta3').value;
  resposta1=resposta1.toLowerCase();
  resposta2=resposta2.toLowerCase();
  resposta3=resposta3.toLowerCase();
  resposta1=resposta1.trim();
  resposta2=resposta2.trim();
  resposta3=resposta3.trim();
  var alerta ="Respostas incorretas: "
  if( (resposta1 != "") && (resposta2 != "") && (resposta3 != "") ){
    if( (resposta1 == "troclea") && (resposta2 == "corpo da ulna") && (resposta3== "processo estilóide")){
      alert("Parabés !!! Você acertou todas.")
    }
    else {
      if( (resposta1 != "troclea") && (resposta2 != "corpo da ulna") && (resposta3 != "processo estilóide")){
        alert("Que pena! Você errou todas as questões.")
      }
      else {
        if( (resposta1 != "troclea")){
          alerta= alerta + "1 ";
        }
        if ((resposta2 != "corpo da ulna")){
          alerta = alerta + "2 ";
        }
        if ((resposta3 != "processo estilóide")){
          alerta = alerta + "3 "
        }
        alert (alerta);
      } // FINAL ELSE LINHA 19
    } // FINAL ELSE LINHA 15
  } // FINAL SE LINHA 13
  else {
    alert("Preencha os campos vazios!");
  }
  }
