// Preferi mesclar perguntas pessoais com questões
// Tema: futebol
// This is a JavaScript file
$(document).on("click","#confirm", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Você acertou!!!");
      navigator.vibrate(2000);
    }else{
      navigator.notification.alert("Infelizmente você errou!");
      navigator.vibrate(2000);
    }
  }
  navigator.notification.confirm("Quantas bolas de ouro Lionel Messi tem?", confirma, "Pergunta 1:",['6','5']);
});

$(document).on("click","#confirm2", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Você acertou!!!");
      navigator.vibrate(2000);
    }else{
      navigator.notification.alert("Infelizmente você errou!");
      navigator.vibrate(2000);
    }
  }
  navigator.notification.confirm("Quantas bolas de ouro Cristiano Ronaldo tem?", confirma, "Pergunta 2:",['5','4']);
});

$(document).on("click","#confirm3", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Você acertou!!!");
      navigator.vibrate(2000);
    }else{
      navigator.notification.alert("Infelizmente você errou!");
      navigator.vibrate(2000);
    }
  }
  navigator.notification.confirm("Quem é o maior artilheiro da Champions League de todos os tempos?", confirma, "Pergunta 3:",['Cristiano Ronaldo','Lionel Messi']);
});

$(document).on("click","#confirm4", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Você acertou!!!");
      navigator.vibrate(2000);
    }else{
      navigator.notification.alert("Infelizmente você errou!");
      navigator.vibrate(2000);
    }
  }
  navigator.notification.confirm("Qual time é com mais titulos de campeonato brasileiro?", confirma, "Pergunta 4:",['Palmeiras','Santos']);
});

$(document).on("click","#confirm5", function(){
  function confirma(buttonIndex){
    if(buttonIndex == "1"){
      navigator.notification.alert("Você escolheu ser fã do Messi!");
      navigator.vibrate(2000);
    }else{
      navigator.notification.alert("Você escolheu ser fã do Cristiano Ronaldo!");
      navigator.vibrate(2000);
    }
  }
  navigator.notification.confirm("Você prefere Cristiano Ronaldo ou Lionel Messi?", confirma, "Pergunta 5:",['Messi','Cristiano Ronaldo']);
});
