const dolphins = {
    score1: 97,
    score2: 112,
    score3: 130
};

const koalas = {
    score1: 109,
    score2: 95,
    score3: 123
};

const dolphinsAverage = (dolphins.score1 + dolphins.score2 + dolphins.score3) / 3;

const koalasAverage = (koalas.score1 + koalas.score2 + koalas.score3) / 3;

if (dolphinsAverage >= 100 && koalasAverage >= 100){
    if(dolphinsAverage === koalasAverage){
        console.log('DRAW!');
    }
    else if(dolphinsAverage > koalasAverage){
        console.log('Dolphins WIN!');
    }
    else{
        console.log('Koalas WIN!');
    }
}
else{
    console.log("Teams didn't make it to 100 points!");
}
