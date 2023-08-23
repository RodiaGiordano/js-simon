const buttonStop = document.getElementById('stop')
const buttonStart = document.getElementById('start')
const countDownDisplay = document.getElementById('time')


const dateTomorrow = new Date (2023, 7, 24, 9, 30, 0 ); //prendo la data della scadenza


let timeStop = false; // variabile di appoggi per lo start/stop

buttonStart.addEventListener('click', function(){ //se start dopo stop ricalcola momento

    const dateRightNow = new Date (); // prendo la data al click del bottone

    const tomorrow = dateTomorrow.getTime(); // prendo i millisecondi di domani (1970)

    const rightNow = dateRightNow.getTime(); // prendo i millisecondi dal 1970 fino al click

    let timeLimit = tomorrow - rightNow; // rimane i millisecondi a domani

    let secondsRemaining = Math.floor(timeLimit / 1000); // li trasformo in secondi

    
    timeStop = false; 
    
    const timeRemaining = setInterval(function () { 

        secondsRemaining --;

        console.log(secondsRemaining)
    
        if(timeStop){
            clearInterval(timeRemaining) // termino se cliccato stop
        }

        if(secondsRemaining <= 0) {
            clearInterval(timeRemaining) // termino se arrivati a 0
            alert ("tempo scaduto!")
        }
    }, 1000); 
    
})




buttonStop.addEventListener('click', function(){

    timeStop = true;
})





    
    



