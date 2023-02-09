function calcTip(bill) {
  if (bill > 50 && bill < 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

const tips = [];
const totals = [];

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(tips);
console.log(totals);
