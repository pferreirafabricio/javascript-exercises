function intervalBetween10and20(elements) {
    let interval = 0;
    let outOfInterval = 0;

    for (let i in elements) {
        if (elements[i] >= 10 && elements[i] <= 20) {
            interval++;
        } else {
            outOfInterval++;
        }
    }

    console.log(`${interval} numbers(s) are between 10 and 20`);
    console.log(`${outOfInterval} numbers(s) aren't between 10 and 20`);
}

intervalBetween10and20([5, 2, 4, 29, 9, 11, 12, 17, 19]);