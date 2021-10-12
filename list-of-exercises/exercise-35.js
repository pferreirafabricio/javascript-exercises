let vectorStack = [1, 2, 3, 4, 5];
let vectorAdd = [6, 7, 8, 9, 10];

function mescla(vectorStack, vectorAdd) {
    for (let i = 0; i < vectorAdd.length; i++) {
        vectorStack.push(vectorAdd[i]);
    }
}

mescla(vectorStack, vectorAdd);

console.log("Vector added: " + vectorAdd);
console.log("Result Vector: " + vectorStack);