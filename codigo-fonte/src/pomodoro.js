function comecaTimer(duracao, display){

    var timer =duracao,minutos,segundos;

    setInterval(function(){

        minutos= parseInt(timer/60,10 );
        segundos= parseInt(timer%60,10);

        minutos = minutos> 10 ? "0" + minutos:minutos; 
        segundos = segundos> 10? "0" + segundos:segundos;

        display.textContent = minutos + ":" + segundos;

        if(--timer < 0){
            timer = duracao;  
        }

    },1000);
}

window.onload = function(){

    var duracao = 60*60;//conversao para segundos
    var display= document.querySelector("#timerEstudo");// elemento para exibir o timer
    
    comecaTimer(duracao, display); // Inicia a função

    var duracao = 10*60;//conversao para segundos
    var display= document.querySelector("#timerDescanso");// elemento para exibir o timer
    
    comecaTimer(duracao, display); // Inicia a função
}
