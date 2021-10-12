function dealWithFloats(floatNumber) {
    console.log(`R$ ${floatNumber.toFixed(2).replace('.', ',')}`);
}

dealWithFloats(0.500000001);