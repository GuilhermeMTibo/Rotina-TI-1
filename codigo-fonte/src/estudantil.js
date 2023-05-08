import * as Materia from '../modal/materia'

var materias = JSON.parse('../json/materia.json');
console.log(materias)

function salvar() {
    console.log(nome)
    let mat = new Materia('Teste', 100, 60)
    materias.push(mat)
    console.log(JSON.stringify(materias))
}