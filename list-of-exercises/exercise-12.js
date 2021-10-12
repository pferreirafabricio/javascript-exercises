function FatorialFunct (Value) {
    return Value == 0 ? 1 : Value * FatorialFunct(Value - 1);
}

function fatorial (Value) {
    if (Value < 0) {
        console.log('Obrigatorio ser maior 0');
    } else {
        console.log(`${Value}! = ${FatorialFunct(Value)}`);
    }
}

fatorial(-1); 
fatorial(0); 
fatorial(1); 
fatorial(2); 
fatorial(3); 
fatorial(4); 
fatorial(5); 
fatorial(6); 
fatorial(7); 
fatorial(8); 
fatorial(9); 
fatorial(10); 