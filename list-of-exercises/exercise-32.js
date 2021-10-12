function  calculatesMediaArray(array) {
    let average = 0;
    for (let i in array) {
        average += array[i];
    }
    average /= array.length;
    console.log(`the average is ${average}`);
}

 calculatesMediaArray([1, 3, 5, 7, 9, 11]);