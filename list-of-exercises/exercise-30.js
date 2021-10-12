function majorAndMinor(elements) {
    let majorNumber = elements[0];
    let minorNumber = elements[0];

    for (let i in elements) {
        if (elements[i] > majorNumber) {
            majorNumber = elements[i];
        }
        if (elements[i] < minorNumber) {
            minorNumber = elements[i];
        }
    }
    console.log(`The major number is ${majorNumber}`);
    console.log(`The minor number is ${minorNumber}`);
}

majorAndMinor([10, 5455, 966, 32, 65])