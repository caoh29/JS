const dolphins = {
    score1: 85,
    score2: 54,
    score3: 41
};

const koalas = {
    score1: 23,
    score2: 34,
    score3: 27
};


function calcAverage(...scores){
    return scores.reduce((a, b) => a + b, 0)/scores.length;
}

function checkWinner(dolphinsAverage, koalasAverage){
    if (dolphinsAverage >= koalasAverage*2){
        console.log(`Dolphins wins (${dolphinsAverage} vs. ${koalasAverage})`);
    }

    else if (koalasAverage >= dolphinsAverage*2){
        console.log(`Koalas wins (${koalasAverage} vs. ${dolphinsAverage})`);
    }

    else{
        console.log('None win');
    }
}


const koalasAverage = calcAverage(koalas.score1, koalas.score2, koalas.score3);

const dolphinsAverage = calcAverage(dolphins.score1, dolphins.score2, dolphins.score3);

checkWinner(dolphinsAverage, koalasAverage);