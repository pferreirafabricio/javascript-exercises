function Calculator (ValA, OP, ValB) {
    switch (OP) {
        case '+':
            console.log(`${ValA} ${OP} ${ValB} = ${ValA + ValB}`);
            break;
        case '-':
            console.log(`${ValA} ${OP} ${ValB} = ${ValA - ValB}`);
            break;
        case '*':
            console.log(`${ValA} ${OP} ${ValB} = ${ValA * ValB}`);
            break;
        case '/':
            console.log(`${ValA} ${OP} ${ValB} = ${ValA / ValB}`);
            break;
        default:
            console.log('Inválida');
    }
}

Calculator(10, '+', 12); 
Calculator(8, '-', 56); 
Calculator(5, '*', 2); 
Calculator(2, '/', 1); 