var john = {
    name: 'John',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

var mark = {
    name: 'Mark',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

john.calcBMI()
mark.calcBMI()
console.log(john, mark)
john.bmi > mark.bmi ? console.log(john.name, john.bmi) : console.log(mark.name, mark.bmi)