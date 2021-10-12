function calculateGames(pontuationList) {
    const list = pontuationList.split(' ');
    
    let recordTimes = 0;
    let bestRecord = 0;
    let worsPontuation = 1;

    list.forEach((pontuation, index) =>  {
        console.log(index);
        if (pontuation > bestRecord) {
            bestRecord = pontuation;
            ++recordTimes;
        }
        else ++worsPontuation;
    });

    console.log([recordTimes, worsPontuation]);
}

calculateGames("10 20 20 8 25 3 0 30 1");