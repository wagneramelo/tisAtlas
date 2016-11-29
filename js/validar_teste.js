function Resposta_teste(){
  var resposta1=document.getElementById('resposta1').value;
  var resposta2=document.getElementById('resposta2').value;
  var resposta3=document.getElementById('resposta3').value;
  var resposta4=document.getElementById('resposta4').value;
  var resposta5=document.getElementById('resposta5').value;
  resposta1=resposta1.toLowerCase();
  resposta2=resposta2.toLowerCase();
  resposta3=resposta3.toLowerCase();
  resposta4=resposta4.toLowerCase();
  resposta5=resposta5.toLowerCase();
  resposta1=resposta1.trim();
  resposta2=resposta2.trim();
  resposta3=resposta3.trim();
  resposta4=resposta4.trim();
  resposta5=resposta5.trim();
  var alerta ="Respostas incorretas: "
  if( (resposta1 != "") && (resposta2 != "") && (resposta3 != "") && (resposta4 != "") && (resposta5 != "")){
    if( (resposta1 == "cabeça do úmero") && (resposta2 == "colo") && (resposta3== "tubérculo menor") && (resposta4== "tuberosidade redonda maior") && (resposta5 == "epicôndilo medial")){
      alert("Parabés !!! Você acertou todas.")
    }
    else {
      if( (resposta1 != "cabeça do úmero") && (resposta2 != "colo") && (resposta3!= "tubérculo menor") && (resposta4!= "tuberosidade redonda maior") && (resposta5 != "epicôndilo medial")){
        alert("Que pena! Você errou todas as questões.")
      }
      else {
        if( (resposta1 != "cabeça do úmero")){
          alerta= alerta + "1 ";
        }
        if ((resposta2 != "colo")){
          alerta = alerta + "2 ";
        }
        if ((resposta3 != "tubérculo menor")){
          alerta = alerta + "3 "
        }
        if ((resposta4 != "tuberosidade redonda maior")){
          alerta = alerta + "4 "
        }
        if ((resposta5 != "epicôndilo medial")){
          alerta = alerta + "5 "
        }
        alert (alerta);
      } // FINAL ELSE LINHA 19
    } // FINAL ELSE LINHA 15
  } // FINAL SE LINHA 13
  else {
    alert("Preencha os campos vazios!");
  }
  }














  /* original
  if( (resposta1 != "") && (resposta2 != "") && (resposta3 != "") && (resposta4 != "") && (resposta5 != "")){
    if( (resposta1 == "cabeça do úmero") && (resposta2 == "colo") && (resposta3== "tubérculo menor") && (resposta4== "tuberosidade redonda maior") && (resposta5 == "epicôndilo medial")){
      alert("Parabés !!! Você acertou todas.")
    }
    if( (resposta1 != "cabeça do úmero") && (resposta2 != "colo") && (resposta3!= "tubérculo menor") && (resposta4!= "tuberosidade redonda maior") && (resposta5 != "epicôndilo medial")){
      alert("Que pena. você não acertou nenhum questão.")
    }
    if( (resposta1 != "cabeça do úmero") && (resposta2 == "colo") && (resposta3== "tubérculo menor") && (resposta4== "tuberosidade redonda maior") && (resposta5 == "epicôndilo medial")){
      alert("Você errou o numero 1.");
      document.getElementById('resposta1').focus();
    }
    if( (resposta1 == "cabeça do úmero") && (resposta2 != "colo") && (resposta3== "tubérculo menor") && (resposta4== "tuberosidade redonda maior") && (resposta5 == "epicôndilo medial")){
      alert("Você errou o numero 2.");
      document.getElementById('resposta2').focus();
    }
    if( (resposta1 == "cabeça do úmero") && (resposta2 == "colo") && (resposta3!= "tubérculo menor") && (resposta4== "tuberosidade redonda maior") && (resposta5 == "epicôndilo medial")){
      alert("Você errou o numero 3.");
      document.getElementById('resposta3').focus();
    }
    if( (resposta1 == "cabeça do úmero") && (resposta2 == "colo") && (resposta3== "tubérculo menor") && (resposta4!= "tuberosidade redonda maior") && (resposta5 == "epicôndilo medial")){
      alert("Você errou o numero 4.");
      document.getElementById('resposta4').focus();
    }
    if( (resposta1 == "cabeça do úmero") && (resposta2 == "colo") && (resposta3== "tubérculo menor") && (resposta4== "tuberosidade redonda maior") && (resposta5 != "epicôndilo medial")){
      alert("Você errou o numero 5.");
      document.getElementById('resposta1').focus();
    }
    if( (resposta1 != "cabeça do úmero") && (resposta2 != "colo") && (resposta3== "tubérculo menor") && (resposta4== "tuberosidade redonda maior") && (resposta5 == "epicôndilo medial")){
      alert("Você errou os números 1 e 2.");
      document.getElementById('resposta1').focus();
      document.getElementById('resposta1').focus();
    }
  }
  else {
    alert("Preencha os campos vazios!");
  }


} */
