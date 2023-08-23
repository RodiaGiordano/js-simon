console.log("JS functions OK")

/**
 * funzione che genera un numero random, posso scegliere se includere l'ultimo o no
 * @param {int} max 
 * @param {int} min 
 * @param {boolean} [lastIncluded=true] 
 * @returns {int} il numero randomico generato fra massimo e minimo
 *  */

function randomNumber(max, min, lastIncluded = true){
   if(lastIncluded) max++
   
   let randomNumber = Math.floor(Math.random() * (max - min) + min);
   return randomNumber;
}