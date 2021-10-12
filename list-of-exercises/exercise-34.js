
function testCharacters(str1, str2) {
    let  isContained = true;
    for (let i = 0; i < str1.length; i++) {
        let charStr1 = str1.charAt(i).toLowerCase();
        for (let j = 0; j < str2.length; j++) {
            let charStr2 = str2.charAt(j).toLowerCase();
            if (charStr1 === charStr2) {
                 isContained = true;
                break;
            } else {
                 isContained = false;
            }
        }
        if (! isContained) {
            return  isContained;
        }
    }
    return  isContained;
}

console.log(testCharacters('abc', 'csa'));