function negativeNumbers(array) {
    let contNegatives = 0;
    for (let i in array) {
        if (array[i] < 0) {
            contNegatives++;
        }
    }
    console.log(`The amount of negative numbers is ${contNegatives}`);
}

negativeNumbers([0, 3, -2, 10, -5]);