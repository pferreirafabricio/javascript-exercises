const set = [
    1, 2, 3, 5, 5, 1, 2
];

const multidimensional = [
    ["1", 4, '3'],
    [true],
    [1.4, 'Hi', new Object()],
];

/**
 * @param {Array} array 
 * @returns 
 */
function sum(array) {
    return array.reduce((previousValue, currentValue) => previousValue + currentValue);
}

/**
 * @param {Array} array 
 * @returns 
 */
function stringified(array) {
    return array.reduce((previousValue, currentValue) => previousValue += ` ${currentValue}`);
}

/**
 * @param {Array} array 
 * @returns 
 */
function flatten(array) {
    return array.reduce((currentValue, currentItem) => currentValue.concat(currentItem), []);
};

console.log(`Sum: ${sum(set)}`);
console.log(`Stringified: ${stringified(set)}`);
console.log(`Flatten: ${flatten(multidimensional)}`);

