function separarParImpar(array) {
    let pairsCounter = 0;
    let oddCounter = 0;

    for (let i in array) {
        array[i] % 2 == 0 ? pairsCounter++ : oddCounter++;
    }
    console.log(`${pairsCounter} number(s) are pairs and ${oddCounter} are number(s) odd(s)`);
}

separarParImpar([1, 3, 78, 90, 13])