function  returnsConcept(arrayNotas) {
    let media = verifyMedia(arrayNotas);
    if (media < 5) {
        console.log("your grade is D");
    } else if (media < 7) {
        console.log("your grade is C");
    } else if (media < 9) {
        console.log("your grade is B");
    } else {
        console.log("your grade is A");
    }
}

function verifyMedia(array) {
    let total = 0;
    for (let i in array) {
        total += array[i]
    }
    return (total / array.length).toFixed(2);
}

 returnsConcept([9, 10]);