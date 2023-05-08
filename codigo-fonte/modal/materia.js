export class Materia {
    constructor(id, nome, pontos, media) {
        this.id = id
        this.nome = nome
        this.pontos = pontos
        this.media = media
    }
    
    constructor(nome, pontos, media) {
        this.nome = nome
        this.pontos = pontos
        this.media = media
    }
}
