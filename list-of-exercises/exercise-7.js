function bhaskara(ax2, bx, c) {
    const delta = calculateDelta(ax2, bx, c);

    if (delta < 0) return "Delta é negativo";

    const result1 = (-bx + Math.sqrt(delta)) / 2 * ax2;
    const result2 = (-bx - Math.sqrt(delta)) / 2 * ax2;

    return [result1, result2];
}

function calculateDelta(a, b, c) {
    return b ** 2 - 4 * a * c;
}

console.log(`The result of bhaskara is: ${bhaskara(3, -5, 12)}`);
console.log(`The result of bhaskara is: ${bhaskara(1, -2, 1)}`);
console.log(`The result of bhaskara is: ${bhaskara(4, -4, -24)}`);