// BMI = mass / (height ** 2);

let Mark = {
    mass : 78,
    height : 1.69,
    BMI : undefined,

    calcBMI: function () {
        this.BMI = this.mass/(this.height ** 2);
        return this.BMI;
    }
}

let John = {
    mass : 92,
    height : 1.95,
    BMI : undefined,

    calcBMI: function () {
        this.BMI = this.mass/(this.height ** 2);
        return this.BMI;
    }
}

Mark.calcBMI();
John.calcBMI();

if (Mark.BMI > John.BMI){
    console.log(`Mark's BMI (${Mark.BMI.toFixed(1)}) is higher than John's (${John.BMI.toFixed(1)})!`)
}else{
    console.log(`John's BMI (${John.BMI.toFixed(1)}) is higher than Mark's (${Mark.BMI.toFixed(1)}) !`)
}