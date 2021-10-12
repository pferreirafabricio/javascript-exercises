function compareHeights(height1, rate1, height2, rate2) {
    let time = 0;
    if (height1 == height2) {
        if (rate1 > rate2) {
            console.log(`Child 1 will become Child 2 in 1 year.`);
        } else if (rate1 < rate2) {
            console.log(`Child 2 will become Child 1 in 1 year.`);
        } else {
            console.log("The two Childs are the same height");
        }
    } else if (height1 < height2) {
        console.log(`Child 1 with ${height1}cm`);
        console.log(`Child 2 with ${height2}cm`);
        while (height1 < height2) {
            height1 = height1 + height1 * rate1;
            height2 = height2 + height2 * rate2;
            time++;
        }
        console.log(`Child 1 will become Child 2 in ${time} year(s).`);
        console.log(`Child 1 with ${height1}cm`);
        console.log(`Child 2 with ${height2}cm`);
    } else {
        console.log(`Child 1 with ${height1}cm`);
        console.log(`Child 2 with ${height2}cm`);
        while (height1 > height2) {
            height1 = height1 + height1 * rate1;
            height2 = height2 + height2 * rate2;
            time++;
        }
        console.log(`Child 2 will become Child 1 in ${time} year(s).`);
        console.log(`Child 1 with ${height1}cm`);
        console.log(`Child 2 with ${height2}cm`);
    }
}

compareHeights(50, 0.05, 50, 0.06);