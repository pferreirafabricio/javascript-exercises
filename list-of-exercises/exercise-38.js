function  oddNumbers(start, end) {
    start > end ? [start, end] : [end, start];
    let odd = []
    for (let i = start; i <= end; i++) {
        if (i % 2 != 0) {
            odd.push(i)
        }
    }
    let res = "";
    for (let i in odd) {
        res = res.concat(odd[i], ", ")
    }
    console.log(res);
}

 oddNumbers(0, 100);