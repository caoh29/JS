function calcTip(bill){
    if ((bill > 50)&&(bill < 300)){
        return bill * 0.15;
    }else{
        return bill * 0.2;
    }
}

const tips=[];
const total=[];

const bills = [125, 555, 44];

for(let i=0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    total.push(tips[i] + bills[i]);
}

console.log(tips)
console.log(total)