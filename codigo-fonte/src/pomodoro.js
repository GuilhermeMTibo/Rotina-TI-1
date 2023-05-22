var intervaloEstudo; // variável para armazenar o intervalo de estudo
var intervaloDescanso; // variável para armazenar o intervalo de descanso

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

var timerEmAndamento = false; // Variável para controlar se o timer está em andamento
var tempoRestante = 0; // Variável para armazenar o tempo restante do timer

function iniciarEstudo() {
    var duracaoEstudo = 60 * 60; // conversão para segundos
    var displayEstudo = document.querySelector("#timerEstudo"); // elemento para exibir o timer
    var botaoStart = document.querySelector("#startButton"); // elemento do botão
    var imagemStart = document.querySelector("#startImage"); // elemento da imagem do botão

    if (!timerEmAndamento) {
        if (tempoRestante === 0) {
            // Se não há tempo restante, inicia o timer com a duração completa
            intervaloEstudo = comecaTimer(duracaoEstudo, displayEstudo);
        } else {
            // Se há tempo restante, inicia o timer com o tempo restante
            intervaloEstudo = comecaTimer(tempoRestante, displayEstudo);
        }
        
        timerEmAndamento = true;
        imagemStart.src = "../assets/Pause.png"; // Altera a imagem do botão para Pause
        imagemStart.alt = "Pause";
    } else {
        clearInterval(intervaloEstudo); // Pausa o timer de estudo
        timerEmAndamento = false;
        imagemStart.src = "../assets/Start.png"; // Altera a imagem do botão para Start
        imagemStart.alt = "Start";

        // Armazena o tempo restante do timer
        var minutos = parseInt(displayEstudo.querySelector("#minutos").textContent);
        var segundos = parseInt(displayEstudo.querySelector("#segundos").textContent);
        tempoRestante = minutos * 60 + segundos;
    }
}
function iniciarDescanso() {
    var duracaoDescanso = 10 * 60; // conversão para segundos
    var displayDescanso = document.querySelector("#timerDescanso"); // elemento para exibir o timer
    intervaloDescanso = comecaTimer(duracaoDescanso, displayDescanso); // Inicia o timer de descanso
}

function pausarTimer() {
    if (intervaloEstudo) {
        clearInterval(intervaloEstudo); // Pausa o timer de estudo
        intervaloEstudo = null;
    }
    if (intervaloDescanso) {
        clearInterval(intervaloDescanso); // Pausa o timer de descanso
        intervaloDescanso = null;
    }
}