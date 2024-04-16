
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual o livro mais vendido do mundo?");

    
    if (respostaTime.toLowerCase() === "bíblia") {
      alert("a Bíblia Sagrada é o livro mais vendido do mundo, tendo cerca de 5 bilhões de cópias vendidas.");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
