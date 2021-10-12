const sets = [
    [1, 2, 3, 5, 5, 1, 2],
    [3, 4, 5, 4, 4, 9, 8],
];

/**
 * 
 * @param {Array<number>} setA 
 * @param {Array<number>} setB 
 */
function unionOfSets(setA, setB) {
    return [...new Set(setA.concat(setB))];
}

/**
 * 
 * @param {Array<number>} setA 
 * @param {Array<number>} setB 
 */
 function intersectionOfSets(setA, setB) {
    return  [...new Set(
        setA.filter((currentNumber) => setB.find(x => x == currentNumber))
    )];
}

/**
 * 
 * @param {Array<number>} setA 
 * @param {Array<number>} setB 
 */
 function differenceOfSets(setA, setB) {
    return [...new Set(
        setA.filter((currentNumber) => !setB.find(x => x == currentNumber))
    )];
}

console.log(unionOfSets(sets[0], sets[1]));
console.log(intersectionOfSets(sets[0], sets[1]));
console.log(differenceOfSets(sets[0], sets[1]));