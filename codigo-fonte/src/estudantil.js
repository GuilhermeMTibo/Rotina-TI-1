var materias = localStorage.getItem('materias') ? JSON.parse(localStorage.getItem('materias')) : []

var listaMaterias = document.getElementById("listaMateriasDiv")
if(materias.length > 0) {
    materias.forEach(mat => {
        let cardMateria = document.createElement('div')
        cardMateria.setAttribute('class', 'cardMateria')
        cardMateria.setAttribute('id', `materia-${mat.id}`)

        let areaTituloCard = document.createElement('div')
        areaTituloCard.setAttribute('class', 'areaTituloCard')

        let titulo = document.createElement('span')
        titulo.setAttribute('class', 'materiaTitulo')
        titulo.appendChild(document.createTextNode(mat.nome))

        let botaoRemover = document.createElement('button')
        botaoRemover.setAttribute('class', 'botaoRemover')
        botaoRemover.setAttribute('onclick', `removerMateria(${mat.id})`)
        botaoRemover.appendChild(document.createElement('span').appendChild(document.createTextNode('Remover')))

        areaTituloCard.appendChild(titulo)
        areaTituloCard.appendChild(botaoRemover)

        let info1 = document.createElement('span')
        let info2 = document.createElement('span')
        info1.setAttribute('class', 'infoMateria')
        info2.setAttribute('class', 'infoMateria')
        info1.appendChild(document.createTextNode(`Pontuação máxima : ${mat.pontos}`))
        info2.appendChild(document.createTextNode(`Média : ${mat.media}`))  

        cardMateria.appendChild(areaTituloCard)
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

    let materia = document.getElementById("listaMateriasDiv")

    let cardMateria = document.createElement('div')
    cardMateria.setAttribute('class', 'cardMateria')
    cardMateria.setAttribute('id', `materia-${mat.id}`)

    let areaTituloCard = document.createElement('div')
    areaTituloCard.setAttribute('class', 'areaTituloCard')

    let titulo = document.createElement('span')
    titulo.setAttribute('class', 'materiaTitulo')
    titulo.appendChild(document.createTextNode(mat.nome))

    let botaoRemover = document.createElement('button')
    botaoRemover.setAttribute('class', 'botaoRemover')
    botaoRemover.setAttribute('onclick', `removerMateria(${mat.id})`)
    botaoRemover.appendChild(document.createElement('span').appendChild(document.createTextNode('Remover')))

    areaTituloCard.appendChild(titulo)
    areaTituloCard.appendChild(botaoRemover)

    let info1 = document.createElement('span')
    let info2 = document.createElement('span')
    info1.setAttribute('class', 'infoMateria')
    info2.setAttribute('class', 'infoMateria')
    info1.appendChild(document.createTextNode(`Pontuação máxima : ${mat.pontos}`))
    info2.appendChild(document.createTextNode(`Média : ${mat.media}`))  

    cardMateria.appendChild(areaTituloCard)
    cardMateria.appendChild(info1)
    cardMateria.appendChild(info2)               

    materia.appendChild(cardMateria)
}

function removerMateria(matId) {
    materias = materias.filter(m => m.id !== matId)
    let materia = document.getElementById("listaMateriasDiv")
    materia.removeChild(document.getElementById(`materia-${matId}`))
    localStorage.setItem('materias', JSON.stringify(materias))
}