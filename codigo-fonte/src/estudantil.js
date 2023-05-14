var materias = localStorage.getItem('materias') ? JSON.parse(localStorage.getItem('materias')) : []

var listaMaterias = document.getElementById("listaMateriasDiv")
console.log(listaMaterias)
if(materias.length > 0) {
    materias.forEach(mat => {
        var cardMateria = document.createElement('div')
        cardMateria.setAttribute('class', 'cardMateria')  

        var titulo = document.createElement('span')
        titulo.setAttribute('class', 'materiaTitulo')
        titulo.appendChild(document.createTextNode(mat.nome))     

        var info1 = document.createElement('span')
        var info2 = document.createElement('span')
        info1.setAttribute('class', 'infoMateria')
        info2.setAttribute('class', 'infoMateria')
        info1.appendChild(document.createTextNode(`Pontuação máxima : ${mat.pontos}`))
        info2.appendChild(document.createTextNode(`Média : ${mat.media}`))  

        cardMateria.appendChild(titulo)
        cardMateria.appendChild(info1)
        cardMateria.appendChild(info2)        

        listaMaterias.appendChild(cardMateria)
    });
}

function salvar() {
    let nome = document.getElementById("nome").value
    let pontos = document.getElementById("pontos").value
    let media = document.getElementById("media").value
    let mat = {
        id: materias[materias.length - 1] ? materias[materias.length - 1].id + 1 : 1,
        nome: nome, 
        pontos: pontos, 
        media: media
    }
    materias.push(mat)
    window.location.href = '#'

    localStorage.setItem('materias', JSON.stringify(materias))

    document.getElementById("nome").value = null
    document.getElementById("pontos").value = null
    document.getElementById("media").value = null
}