/**
 * 
 * @param {string} title 
 * @param {string} author 
 * @param {boolean} alreadyRead 
 * @returns 
 */
function createBook(title, author, alreadyRead) {
    return {
        title,
        author,
        alreadyRead
    };
}

const bookstore  = [
    createBook('Forest of Secrets', 'Erin Hunter', true),
    createBook("Naruto: Kakashi's Story--Lightning in the Frozen Sky", 'Masashi Kishimoto', false),
    createBook('Naruto Gold - Volume 1', 'Masashi Kishimoto', false),
];

for (let index = 0; index < bookstore.length; index++) {
    const currentBook = bookstore[index];

    console.log(`${currentBook.title} of ${currentBook.author}`);

    if (currentBook.alreadyRead)
        console.log(`You already read the "${currentBook.title}"\n`);
    else
        console.log(`You have to read the "${currentBook.title}"\n`);
}
