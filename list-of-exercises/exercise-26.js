function pairs(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

pairs(1, 100);