var intervaloEstudo;
var intervaloDescanso;
var timerEmAndamento = false;
var duracaoEstudo = 60 * 0.1; // Duração do estudo em segundos (1 minuto)
var duracaoDescanso = 60 * 0.15; // Duração do descanso em segundos (10 minutos)
var tempoRestante = duracaoEstudo; // Tempo restante do timer

// Função para iniciar o timer de estudo
function iniciarEstudo() {
    var displayEstudo = document.querySelector("#timerEstudo");
    var botaoStart = document.querySelector("#startButton");
    var imagemStart = document.querySelector("#startImage");

    if (!timerEmAndamento) {
        intervaloEstudo = comecaTimer(tempoRestante, displayEstudo, function() {
            // Callback executado ao terminar o timer de estudo
            pausarTimer(displayEstudo);
            iniciarDescanso();
        });

        timerEmAndamento = true;
        imagemStart.src = "../assets/Pause.png";
        imagemStart.alt = "Pause";
    } else {
        pausarTimer(displayEstudo);
    }
}

// Função para iniciar o timer de descanso
function iniciarDescanso() {
    var displayDescanso = document.querySelector("#timerEstudo");
    var botaoStart = document.querySelector("#startButton");
    var imagemStart = document.querySelector("#startImage");

    if (!timerEmAndamento) {
        intervaloDescanso = comecaTimer(duracaoDescanso, displayDescanso, function() {
            // Callback executado ao terminar o timer de descanso
            pausarTimer(displayDescanso);
            iniciarEstudo(); // Iniciar o tempo de estudo após o tempo de descanso
        });

        timerEmAndamento = true;
        imagemStart.src = "../assets/Pause.png";
        imagemStart.alt = "Pause";
    } else {
        pausarTimer(displayDescanso);
    }
}

// Função para pausar o timer
function pausarTimer(display) {
    if (timerEmAndamento) {
        clearInterval(intervaloEstudo);
        clearInterval(intervaloDescanso);
        timerEmAndamento = false;

        var minutos = parseInt(display.textContent.split(":")[0]);
        var segundos = parseInt(display.textContent.split(":")[1]);

        tempoRestante = minutos * 60 + segundos;

        var imagemStart = document.querySelector("#startImage");
        imagemStart.src = "../assets/Start.png";
        imagemStart.alt = "Start";
    }
}

// Função para iniciar o timer
function comecaTimer(duracao, display, callback) {
    var timer = duracao;
    var minutos, segundos;

    var intervalo = setInterval(function () {
        minutos = parseInt(timer / 60, 10);
        segundos = parseInt(timer % 60, 10);

        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;

        display.textContent = minutos + ":" + segundos;

        if (--timer < 0) {
            clearInterval(intervalo);
            callback(); // Chamar o callback ao terminar o timer
        }
    }, 1000);

    return intervalo;
}
