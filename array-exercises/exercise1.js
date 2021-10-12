/**
 * @param {string} title 
 * @param {number} portions 
 * @param {Array<string>} ingredients 
 */
function createRevenue(title, portions, ingredients) {
    return {
        title,
        portions,
        ingredients
    };
}

const revenue = createRevenue();

revenue.title = 'Um doce';
console.log(revenue);

revenue.portions = 2;
console.log(revenue);

revenue.ingredients = [
    'canela',
    'cominho',
    'cacau',
];
console.log('\n--- Final Revenue ---');
console.log(revenue);