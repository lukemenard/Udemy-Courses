var john = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalValues: [],
    calcTip: function(){
        for(i = 0; i < this.bills.length; i++){
            let bill = this.bills[i]
            if (bill < 50){
                this.tips.push(bill * .2)
                this.finalValues.push(bill * 1.2)
            } else if (bill > 200){
                this.tips.push(bill * .1)
                this.finalValues.push(bill * 1.1)
            } else {
                this.tips.push(bill * .15)
                this.finalValues.push(bill * 1.15)
            }
        }
    }
}
var mark = {
    bills: [77, 375, 110, 45],
    tips: [],
    finalValues: [],
    calcTip: function(){
        for(i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 100){
                this.tips.push(this.bills[i] * .2)
                this.finalValues.push(this.bills[i] * 1.2)
            } else if (this.bills[i] > 300){
                this.tips.push(this.bills[i] * .25)
                this.finalValues.push(this.bills[i] * 1.25)
            } else {
                this.tips.push(this.bills[i] * .1)
                this.finalValues.push(this.bills[i] * 1.1)
            }
        }
    }
}

function calcAvg(tips){
    let total = 0
    for(i = 0; i < tips.length; i++){
        total += tips[i]
    }
    return total / tips.length
}

john.calcTip()
mark.calcTip()
calcAvg(john.tips) > calcAvg(mark.tips)
? console.log(calcAvg(john.tips))
: console.log(calcAvg(mark.tips))
console.log(john.tips, john.finalValues)