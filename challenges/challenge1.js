// BMI = mass / (height ** 2);

let Mark = {
    mass : 78,
    height : 1.69
}

let John = {
    mass : 92,
    height : 1.95
}

const Mark_BMI = Mark.mass / (Mark.height ** 2)

const John_BMI = John.mass / (John.height ** 2)

if (Mark_BMI > John_BMI){
    console.log(`Mark's BMI (${Mark_BMI.toFixed(1)}) is higher than John's (${John_BMI.toFixed(1)})!`)
}else{
    console.log(`John's BMI (${John_BMI.toFixed(1)}) is higher than Mark's (${Mark_BMI.toFixed(1)}) !`)
}