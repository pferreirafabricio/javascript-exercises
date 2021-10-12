function AumentoDeSalario (Trabalho, Salario) {
    switch (Trabalho) {
        case 'A':
            console.log(`O novo salário é R$ ${Salario * 1.1}`);
            break;
        case 'B':
            console.log(`O novo salário é R$ ${Salario * 1.15}`);
            break;
        case 'C':
            console.log(`O novo salário é R$ ${Salario * 1.2}`);
            break;
        default:
            console.log(`Plano inválido`);
    }
}

AumentoDeSalario('A', 100);
AumentoDeSalario('B', 100); 
AumentoDeSalario('C', 100); 
AumentoDeSalario('D', 100);