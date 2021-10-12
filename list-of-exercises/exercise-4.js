function divide(dividend, divisor) {
    const result = dividend / divisor;
    const rest = dividend % divisor;

    console.log(`Result ${result}`);
    console.log(`Rest ${rest}`);
}

divide(4, 1.3);