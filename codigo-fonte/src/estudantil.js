var materias = localStorage.getItem('materias') ? JSON.parse(localStorage.getItem('materias')) : []

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