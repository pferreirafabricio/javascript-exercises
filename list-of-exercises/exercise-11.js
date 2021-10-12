function Bisesexto (ano) {
    let Bisesexto;
    if (ano <= 0) {
        Bisesexto = false;
    } else if (ano % 400 == 0) {
        Bisesexto = true;
    } else if (ano % 100 == 0) {
        Bisesexto = false;
    } else if (ano % 4 == 0) {
        Bisesexto = true;
    } else {
        Bisesexto = false;
    }
    if (!Bisesexto) {
        console.log(`O ano ${ano} não é bissexto`);
        return false;
    }
    console.log(`O ano ${ano} é bissexto`);
    return true;
}

console.log(Bisesexto(10));
console.log(Bisesexto(60));
console.log(Bisesexto(100));
console.log(Bisesexto(400));
console.log(Bisesexto(700));
console.log(Bisesexto(2020));
console.log(Bisesexto(2021));