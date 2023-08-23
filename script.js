
const dateTomorrow = new Date (2023, 7, 24, 9, 30, 0 );

const dateRightNow = new Date ();

console.log("domani 9:30: " + dateTomorrow)
console.log("ora: " + dateRightNow);

const tomorrow = dateTomorrow.getTime();
console.log("ms domani: " + tomorrow);

const rightNow = dateRightNow.getTime();
console.log("ms ora: " + rightNow)


const timeLimit = tomorrow - rightNow;
console.log(timeLimit)
console.log(typeof timeLimit)

const secondsRemaining = Math.floor(timeLimit / 1000);
console.log(secondsRemaining)


