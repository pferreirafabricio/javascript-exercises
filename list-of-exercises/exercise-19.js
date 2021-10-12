function purchase(cod, qtd) {
    let price;
    switch (cod) {
        case 100:
            price = 3.00;
            break;
        case 200:
            price = 4.00;
            break;
        case 300:
            price = 5.50;
            break;
        case 400:
            price = 7.50;
            break;
        case 500:
            price = 3.50;
            break;
        case 600:
            price = 2.80;
            break;
        default:
            return "Invalid Product";
        }
    return price *= qtd;
}

console.log(purchase(600, 2)); 
console.log(purchase(165, 7)); 
