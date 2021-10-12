function healthInsurance(age) {
    let totalValue = 100;
    if (age < 10) {
        totalValue += 80;
    } else if (age >= 10 && age < 30) {
        totalValue += 50;
    } else if (age >= 30 && age < 60) {
        totalValue += 95;
    } else {
        totalValue += 130;
    }
    console.log(`Amount to be paid: $ ${totalValue.toFixed(2)}`);
}

healthInsurance(6);
healthInsurance(25);
healthInsurance(45);
healthInsurance(120);