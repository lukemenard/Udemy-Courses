tipArray = []
finalArray = []

function tipCalc(bill) {
    if (bill < 50) {
        tipArray.push(bill * .2)
        finalArray.push(bill * 1.2)
    }
    else if (bill > 200) {
        tipArray.push(bill * .1)
        finalArray.push(bill * 1.1)        
    }
    else {
        tipArray.push(bill * .15)
        finalArray.push(bill * 1.15)        
    }
}

tipCalc(124)
tipCalc(48)
tipCalc(268)
console.log(tipArray)
console.log(finalArray)

function tipCalculator(bill) {
    var percentage
    if (bill < 50) {
        percentage = .2
    } else if (bill > 200){
        percentage = .1
    } else {
        percentage = .15
    }
    return percentage * bill
}

var bills = [124, 48, 268]
var tips = [tipCalculator(bills[0]),
    tipCalculator(bills[1]).
    tipCalculator(bills[2])
]
var finalValues = [bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]

console.log(tips, finaleValues)