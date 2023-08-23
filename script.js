const buttonStop = document.getElementById('stop')
const countDownDisplay = document.getElementById('time')


const dateTomorrow = new Date (2023, 7, 24, 9, 30, 0 );

const dateRightNow = new Date ();

console.log("domani 9:30: " + dateTomorrow)
console.log("ora: " + dateRightNow);

const tomorrow = dateTomorrow.getTime();
console.log("ms domani: " + tomorrow);

const rightNow = dateRightNow.getTime();
console.log("ms ora: " + rightNow)


let timeLimit = tomorrow - rightNow;
console.log(timeLimit)
console.log(typeof timeLimit)

let secondsRemaining = Math.floor(timeLimit / 1000);
console.log(secondsRemaining)

let timeStop = false;

buttonStop.addEventListener('click', function(){

    timeStop = true;
})
    
    const timeRemaining = setInterval(function () {
        
        secondsRemaining--
        console.log(secondsRemaining)

        if(timeStop){
            clearInterval(timeRemaining)
        }
        
    }, 1000);
    



