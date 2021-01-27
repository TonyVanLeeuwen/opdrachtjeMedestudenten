function isPerfectNumber(numberToCheck) {
    // een perfect getal is een getal dat gelijk is aan
    // de som van de getallen waardoor hij gedeeld kan worden
    // bijvoorbeeld: 1+2+3=6
    let total = 0;
    let divisor = numberToCheck - 1;

    for (let i = 0; i < numberToCheck; i++) {
        while (divisor > 0) {

            if (numberToCheck % divisor === 0) {
                total += divisor;
            }
            divisor--;
        }


    }
    return numberToCheck === total;
}

console.log(isPerfectNumber(29))

module.exports = isPerfectNumber;