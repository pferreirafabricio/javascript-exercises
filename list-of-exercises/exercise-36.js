function multiplyAll(array, numbers) {
    for (let i in array) {
        array[i] = array[i] * numbers;
    }
    console.log(array);
}

function multiplyMajor5(array, numbers) {
    for (let i in array) {
        if (array[i] > 5) {
            array[i] = array[i] * numbers;
        }
    }
    console.log(array);
}

multiplyAll([1, 3, 5, 7, 9], 3);
multiplyMajor5([1, 3, 5, 7, 9], 3);