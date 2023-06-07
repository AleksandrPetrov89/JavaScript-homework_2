const userNumber = process.argv[2];
console.time();
let answer = primeNumbers (userNumber);
console.timeEnd();
console.log(answer);


function primeNumbers (amountNumbers) {
    if (isNaN(amountNumbers) || amountNumbers <= 0) {
        return "Вы ошиблись при вводе параметра!";
    } 
    let result = [2,];
    let number = 2;
    while (result.length < amountNumbers){
        number++;
        let counter = 0;
        for (let denominator of result) {
            if (number % denominator === 0) {
                counter++;
                break;
            }
        }
        if (counter === 0) {
            result[result.length] = number;
        }
    }
    return result;
}
