// date e bottoni
const buttonStop = document.getElementById('stop')
const buttonStart = document.getElementById('start')
const countDownDisplay = document.getElementById('time')

// inner giorni, ore, minuti, secondi

const countDay = document.getElementById('days')
const countHours = document.getElementById('hours')
const countMinutes = document.getElementById('minutes')
const countSeconds= document.getElementById('seconds')



const dateTomorrow = new Date (2023, 7, 24, 9, 30, 0 ); //prendo la data della scadenza
console.log(dateTomorrow)


let timeStop = false; // variabile di appoggi per lo start/stop

buttonStart.addEventListener('click', function(){ //se start dopo stop ricalcola momento
    const timeRemaining = setInterval(function () { 
        
        const dateRightNow = new Date (); // prendo la data al click del bottone
        
        const tomorrow = dateTomorrow.getTime(); // prendo i millisecondi di domani (1970)
        
        const rightNow = dateRightNow.getTime(); // prendo i millisecondi dal 1970 fino al click
        
        let timeLimit = tomorrow - rightNow; // rimane i millisecondi a domani
        
        
        
        let daysLeft = Math.floor(timeLimit / 86400000);
       
        let hoursLeft = Math.floor(timeLimit / 3600000);
        
        let minutesLeft = Math.floor((timeLimit % 3600000) / 60000);
        
        let secondsLeft = Math.floor((timeLimit % 60000) / 1000);
        
        
        if(timeStop){
            clearInterval(timeRemaining); // termino se cliccato stop
           }
        
        if(timeLimit <= 0) {
            clearInterval(timeRemaining); // termino se arrivati a 0
            alert ("tempo scaduto!");
           }

    timeStop = false; 
    

    timeLimit -= 1000;


    daysLeft > 10 ? countDay.innerHTML = daysLeft : countDay.innerHTML = '0' + daysLeft;
    hoursLeft > 10 ? countHours.innerHTML = hoursLeft : countHours.innerHTML = '0' + hoursLeft; 
    minutesLeft > 10 ? countMinutes.innerHTML = minutesLeft : countMinutes.innerHTML = '0' + minutesLeft;   
    secondsLeft > 10 ? countSeconds.innerHTML = secondsLeft : countSeconds.innerHTML = '0' + secondsLeft;
  
  

        

     console.log(timeLimit / 1000);
    
    }, 1000); 
    
})




buttonStop.addEventListener('click', function(){

    timeStop = true;
})
