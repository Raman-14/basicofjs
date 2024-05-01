function findWinners(matches){
    const lostMap = new Map();

    for(let i = 0; i<matches.length; i++){
        let loser = matches[i][1];
        // lostMap.set(loser)++;
        lostMap.set(loser, (lostMap.get(loser) || 0) + 1);
    }

    let notLost=[];
    let lostOnce=[];

    for(let i = 0; i<matches.length; i++){
        let winner = matches[i][0];
        let loser = matches[i][1];
        
        if(!lostMap.has(winner)){
            notLost.push(winner);
            lostMap.set(winner,2);
        }
        // console.log(lostMap.get(loser));
        if(lostMap.get(loser) === 1){
            lostOnce.push(loser);
        }
    }

    notLost.sort((a, b) => a - b);
    lostOnce.sort((a, b) => a - b);
    return {notLost, lostOnce};
}

let matches = [
    [1,3],[2,3],[3,6],
    [5,6],[5,7],[4,5],
    [4,8],[4,9],[10,4],[10,9]
]
console.log(findWinners(matches));