var intervalo;
var timerEmAndamento = false;
var duracaoEstudo = 60 * 60; // Duração do estudo em segundos (1 minuto)
var duracaoDescanso = 60 * 10; // Duração do descanso em segundos (10 minutos)
var tempoRestante = duracaoEstudo; // Tempo restante do timer
var emEstudo = true; // Variável para controlar se está no período de estudo

function iniciarTimer() {
    var display = document.querySelector("#timerEstudo");
    var botaoStart = document.querySelector("#startButton");
    var imagemStart = document.querySelector("#startImage");
  
    if (!timerEmAndamento) {
      intervalo = comecaTimer(tempoRestante, display, function() {
        // Callback executado ao terminar o timer
        pausarTimer(display);
        if (emEstudo) {
          // Terminou o tempo de estudo, iniciar o tempo de descanso
          tempoRestante = duracaoDescanso;
        } else {
          // Terminou o tempo de descanso, iniciar o tempo de estudo
          tempoRestante = duracaoEstudo;
        }
        emEstudo = !emEstudo; // Alternar entre estudo e descanso
        iniciarTimer();
      });
  
      timerEmAndamento = true;
      imagemStart.src = "../assets/Pause.png";
      imagemStart.alt = "Pause";
    } else {
      pausarTimer(display);
    }
  }

// Função para pausar o timer
function pausarTimer(display) {
  if (timerEmAndamento) {
    clearInterval(intervalo);
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
