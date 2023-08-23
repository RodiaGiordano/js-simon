const buttonStop = document.getElementById('stop')
const buttonStart = document.getElementById('start')
const countDownDisplay = document.getElementById('time')


const dateTomorrow = new Date (2023, 7, 24, 9, 30, 0 );
// console.log("domani 9:30: " + dateTomorrow)


let timeStop = false;

buttonStart.addEventListener('click', function(){

    const dateRightNow = new Date ();

    // console.log("ora: " + dateRightNow);

    const tomorrow = dateTomorrow.getTime();
    // console.log("ms domani: " + tomorrow);

    const rightNow = dateRightNow.getTime();
    // console.log("ms ora: " + rightNow)


    let timeLimit = tomorrow - rightNow;
    // console.log(timeLimit)
    // console.log(typeof timeLimit)

    let secondsRemaining = Math.floor(timeLimit / 1000);
    // console.log(secondsRemaining)

    

    
    timeStop = false;
    
    const timeRemaining = setInterval(function () {

        secondsRemaining--

        console.log("con stop: " + secondsRemaining)
    
        if(timeStop){
            clearInterval(timeRemaining)
        }
        
    }, 1000);
    
})




buttonStop.addEventListener('click', function(){

    timeStop = true;
})





    
    



