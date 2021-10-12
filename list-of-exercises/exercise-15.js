function RepassarVenda (Tipo) {
    switch (Tipo) {
        case 'hatch':
            return 'Compra efetuada com sucesso';
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            return 'Tem certeza que não prefere este Tipo?';
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui';
    }
}

console.log(RepassarVenda('hatch'));
console.log(RepassarVenda('sedans')); 
console.log(RepassarVenda('motocicletas')); 
console.log(RepassarVenda('caminhonetes')); 
console.log(RepassarVenda('jipe')); 