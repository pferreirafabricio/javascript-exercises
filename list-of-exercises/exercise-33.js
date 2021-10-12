let integerVector = [9, 8, 4, 2];
let stringVector = ["Laranja", "Melancia", "Limão", "Uva"];
let doubleVector = [9.8, 8.4, 4.2, 2.9];

function concatArrays(...args) {
    let result = [];
    for (let i in args) {
        result = result.concat(args[i])
    }
    return result;
}

console.log(concatArrays(integerVector, stringVector));
console.log(concatArrays(stringVector, doubleVector));