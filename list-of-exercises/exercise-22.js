function payAssoc (month, value) {
    amount = value * Math.pow((1 + 0.05), month - 1);
    return amount.toFixed(2);
}

console.log(payAssoc(1, 200));
console.log(payAssoc(4, 200));
console.log(payAssoc(10, 300));