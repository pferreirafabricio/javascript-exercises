function NTS (value) {
    let n100 = 0, n50 = 0, n10 = 0, n5 = 0, n1 = 0;
    let valueN = calcValueN(value)
    while (valueN > 0) {
        switch (valueN) {
            case 100:
                n100++;
                value -= 100;
                break;
            case 50:
                n50++;
                value -= 50;
                break;
            case 10:
                n10++;
                value -= 10;
                break;
            case 5:
                n5++;
                value -= 5;
                break;
            case 1:
                n1++;
                value -= 1;
                break;
        }

        valueN = calcValueN(value);
    }

    printN(n100, n50, n10, n5, n1);

}

function calcValueN(value) {
    if (value >= 100) {
        return 100;
    } else if (value >= 50) {
        return 50;
    } else if (value >= 10) {
        return 10;
    } else if (value >= 5) {
        return 5;
    } else if (value >= 1) {
        return 1;
    } else {
        return 0;
    }
}

function printN(n100, n50, n10, n5, n1) {
    if (n100) {
        console.log(`${n100} nota(s) de R$ 100,00`);
    }
    if (n50) {
        console.log(`${n50} nota(s) de R$ 50,00`);
    }
    if (n10) {
        console.log(`${n10} nota(s) de R$ 10,00`);
    }
    if (n5) {
        console.log(`${n5} nota(s) de R$ 5,00`);
    }
    if (n1) {
        console.log(`${n1} nota(s) de R$ 1,00`);
    }
}

NTS(247.00);