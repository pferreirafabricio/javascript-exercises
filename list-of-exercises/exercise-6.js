function simpleInterest(initialCapital, interestRate, timeOfApplication) {
    const result = initialCapital + (initialCapital * interestRate * timeOfApplication);
    console.log(`Simple interest: ${formatMoney(result)}`);
}

function compoundInterest(initialCapital, interestRate, timeOfApplication) {
    const result = initialCapital * (1 + interestRate) ** timeOfApplication;
    console.log(`Compound interest: ${formatMoney(result)}`);
}

function formatMoney(money) {
    return `R$ ${money.toFixed(2).replace('.', ',')}`
}

simpleInterest(1000, 0.1, 1);
compoundInterest(1000, 0.1, 1);