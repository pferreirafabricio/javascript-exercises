function OiaAsFruta(fruta) {
    switch (fruta) {
        case 'Kiwi':
            console.log('Não vendemos esta fruta aqui.');
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwis.');
            break;
        case 'melância':
            console.log('Aqui está, são 3 reais o quilo.');
            break;
        default:
            console.log('fruta não localizada');
    }
}

OiaAsFruta('Kiwi');
OiaAsFruta('kiwi');
OiaAsFruta('melância');
OiaAsFruta('larânja');