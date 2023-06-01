var intervaloEstudo; // variável para armazenar o intervalo de estudo
var intervaloDescanso; // variável para armazenar o intervalo de descanso
var timerEmAndamento = false; // Variável para controlar se o timer está em andamento
var duracaoEstudo = 60 * 60; // Duração do estudo em segundos
var tempoRestante = duracaoEstudo; // Tempo restante do timer, inicialmente igual à duração

function comecaTimer(duracao, display) {
    var timer = duracao;
    var minutos, segundos;

    var intervalo = setInterval(function () {
        minutos = parseInt(timer / 60, 10);
        segundos = parseInt(timer % 60, 10);

        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;

        display.textContent = minutos + ":" + segundos;

        if (--timer < 0) {
            timer = duracao;
        }
    }, 1000);

    return intervalo;
}

function iniciarEstudo() {
    var displayEstudo = document.querySelector("#timerEstudo"); // elemento para exibir o timer
    var botaoStart = document.querySelector("#startButton"); // elemento do botão
    var imagemStart = document.querySelector("#startImage"); // elemento da imagem do botão

    if (!timerEmAndamento) {
        intervaloEstudo = comecaTimer(tempoRestante, displayEstudo); // inicia o timer com o tempo restante

        timerEmAndamento = true;
        imagemStart.src = "../assets/Pause.png"; // Altera a imagem do botão para Pause
        imagemStart.alt = "Pause";
    } else {
        pausarTimer(displayEstudo); // Pausa o timer de estudo
    }
}

function iniciarDescanso() {
    var duracaoDescanso = 10 * 60; // conversão para segundos
    var displayDescanso = document.querySelector("#timerDescanso"); // elemento para exibir o timer
    intervaloDescanso = comecaTimer(duracaoDescanso, displayDescanso); // Inicia o timer de descanso
}

function pausarTimer(display) {
    if (timerEmAndamento) {
        clearInterval(intervaloEstudo); // Pausa o timer de estudo
        timerEmAndamento = false;

        // Armazena o tempo restante do timer
        var minutos = parseInt(display.textContent.split(":")[0]);
        var segundos = parseInt(display.textContent.split(":")[1]);
        tempoRestante = minutos * 60 + segundos;

        var imagemStart = document.querySelector("#startImage"); // elemento da imagem do botão
        imagemStart.src = "../assets/Start.png"; // Altera a imagem do botão para Start
        imagemStart.alt = "Start";
    }
}