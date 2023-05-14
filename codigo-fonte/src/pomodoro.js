var intervalo;// variável para armazenar o tempo
function comecaTimer(duracao, display) {
    var timer = duracao;
    var minutos, segundos;

    intervalo = setInterval(function () {
        minutos = parseInt(timer / 60, 10);
        segundos = parseInt(timer % 60, 10);

        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;

        display.textContent = minutos + ":" + segundos;

        if (--timer < 0) {
            timer = duracao;
        }
    }, 1000);
}

function pauseTimer(){
    clearInterval(intervalo);//pausa o timer
}

function startTimer() {

    var duracao = 60*60;//conversao para segundos
    var display= document.querySelector("#timerEstudo");// elemento para exibir o timer
    
    comecaTimer(duracao, display); // Inicia a função

    var duracao = 10*60;//conversao para segundos
    var display= document.querySelector("#timerDescanso");// elemento para exibir o timer
    
    comecaTimer(duracao, display); // Inicia a função
}
