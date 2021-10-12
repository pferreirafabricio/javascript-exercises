let vectorA = [1, 2, 3, 4, 5];
let vectorB = [6, 7, 8, 9, 10];

function swapElementsVectors(vectorA, vectorB) {
    if (vectorA.length == vectorB.length) {
        size = vectorA.length
        for (let i = 0; i < size; i++) {
            vectorB.push(vectorA[i]);
            vectorA.push(vectorB[i]);
        }
        for (let i = 0; i < size; i++) {
            vectorA.shift();
            vectorB.shift();
        }
    } else {
        console.log("Vector of different sizes!");
    }
}

swapElementsVectors(vectorA, vectorB);

console.log(`Vector A: ${vectorA}`);
console.log(`Vector B: ${vectorB}`);