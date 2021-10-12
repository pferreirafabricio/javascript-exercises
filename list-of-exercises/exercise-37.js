function pa(n, a1, r) {
    let pa = [];
    let sumPa = 0;
    for (let i = 0; i < n; i++) {
        a1 = a1 + r
        sumPa += a1;
        pa.push(a1);
    }
    console.log(`PA: ${pa}`);
    console.log(`sum of terms - PA: ${sumPa}`);
}

function pg(n, a1, r) {
    let pg = [];
    let sumPg = 0;
    for (let i = 0; i < n; i++) {
        a1 = a1 * r;
        sumPg += a1;
        pg.push(a1);
    }
    console.log(`PG: ${pg}`);
    console.log(`sum of terms - PG: ${sumPg}`);
}

pa(10, 1, 2);
pg(10, 1, 2);