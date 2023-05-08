var json = JSON.parse();
console.log(json)

function salvar() {
    let nome = document.getElementById("nome").value
    let pontos = document.getElementById("pontos").value
    let media = document.getElementById("media").value
    let mat = {
        nome: nome, 
        pontos: pontos, 
        media: media
    }
    json.materias.push(mat)
    console.log(mat)
}