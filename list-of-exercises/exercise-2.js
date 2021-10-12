function triangleClassification(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
        console.log('Equilátero');
        return;
    }

    if (side1 === side2 || side2 === side3 || side1 === side3) {
        console.log('Isósceles');
        return;
    }

    console.log('Escaleno');
}

triangleClassification(5, 5, 5);
triangleClassification(3, 3, 1);
triangleClassification(6, 3, 2);