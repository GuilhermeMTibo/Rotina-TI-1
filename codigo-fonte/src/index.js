function buttonClicked() {
  // exibir o dia da semana no console
  var diaSemana = this.parentNode.querySelector("span").innerText;
  console.log("Botão clicado para o dia:", diaSemana);
}

//adiciona o evento de clique a todos os botões com a classe "button"
var buttons = document.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", buttonClicked);
}

//função chamada quando o botão "Salvar" é clicado
function salvar() {
  var nomeRotina = document.getElementById("nome").value;
  console.log("Nome da rotina:", nomeRotina);
  var objetivo = document.getElementById("objetivo").value;
  console.log("Objetivo:", objetivo);

  //verificar se o checkbox está marcado
  var checkbox = document.getElementById("checkbox");
  var isChecked = checkbox.checked;
  console.log("Checkbox marcado:", isChecked);

  var btnCancelar = document.querySelector(".btnCancelar");
  btnCancelar.addEventListener("click", function() {
    window.location.href = "#";
  });
}