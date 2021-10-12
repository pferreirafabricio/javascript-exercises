function Result(cod, n1, n2, n3) {
    let med = calcMedPond(n1, n2, n3);
    let result = med >= 5 ? "APROVADO" : "REPROVADO";
    console.log(`Código aluno: ${cod}`)
    console.log(`Nota 1: ${n1}\nNota 2: ${n2}\nNota 3: ${n3}`)
    console.log(`Média: ${med}\nResultado: ${result}\n`);
}

function calcMedPond(n1, n2, n3) {
    let sup;
    let inf1;
    let inf2;
    if (n1 >= n2 && n1 >= n3) {
        sup = n1;
        inf1 = n2;
        inf2 = n3;
    } else if (n2 >= n1 && n2 >= n3) {
        sup = n2;
        inf1 = n1;
        inf2 = n3;
    } else {
        sup = n3;
        inf1 = n1;
        inf2 = n2;
    }
    return ((sup * 4) + (inf1 * 3) + (inf2 * 3)) / 10
}

Result(099, 5, 5, 5)
Result(137, 7, 5, 6)
Result(545, 4, 3, 3)