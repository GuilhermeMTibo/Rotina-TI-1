var rotinas = localStorage.getItem("rotinas") ? JSON.parse(localStorage.getItem("rotinas")) : []
var objetivos = localStorage.getItem("objetivos") ? JSON.parse(localStorage.getItem("objetivos")) : []
var diaSemanaSelecionado

function buttonClicked(diaSemana) {
  console.log(diaSemana)
  diaSemanaSelecionado = diaSemana
  window.location.href = '#modalRotina'
}

//adiciona o evento de clique a todos os botões com a classe "button"
var buttons = document.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", buttonClicked);
}

function salvarRotina() {
  let nome = document.getElementById("nome").value
  
  let rot = {
      id: rotinas[rotinas.length - 1] ? rotinas[rotinas.length - 1].id + 1 : 1,
      nome: nome,
      diaSemana: diaSemanaSelecionado 
  }

  rotinas.push(rot)
  localStorage.setItem("rotinas", JSON.stringify(rotinas))
  console.log(diaSemanaSelecionado)
  let retanguloSemana = document.getElementById(`semana-${diaSemanaSelecionado}`)
  let innerRetangle = document.createElement('div')
  innerRetangle.setAttribute('class', 'inner-rectangle')

  retanguloSemana.appendChild(innerRetangle)

  window.location.href = '#'
}

function salvarNomeObjetivo() {
  let nome = document.getElementById("nomeObjetivo").value
  
  let obj = {
      id: objetivos[objetivos.length - 1] ? objetivos[objetivos.length - 1].id + 1 : 1,
      nome: nome, 
      rotinaId: rotinas[rotinas.length - 1] ? rotinas[rotinas.length - 1].id + 1 : 1,
  }

  objetivos.push(obj)
  localStorage.setItem("objetivos", JSON.stringify(objetivos))
}



