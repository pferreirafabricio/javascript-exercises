function WeekDay(Day) {
    switch (Day) {
        case 1:
            return 'HAPPY';
        case 2:
            return 'Functional Day';
        case 3:
            return 'Functional Day';
        case 4:
            return 'Functional Day';
        case 5:
            return 'Functional Day';
        case 6:
            return 'Functional Day';
        case 7:
            return 'HAPPY';
        default:
            return 'No valid day'
    }
}

console.log(WeekDay(0)); 
console.log(WeekDay(1)); 
console.log(WeekDay(2)); 
console.log(WeekDay(3)); 
console.log(WeekDay(4)); 
console.log(WeekDay(5)); 
console.log(WeekDay(6)); 
console.log(WeekDay(7)); 
console.log(WeekDay(8)); 