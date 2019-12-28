// // Variables and Data Types

// var firstName = "John"
// console.log(firstName)

// var lastName = "Smith"
// var age = 28

// var fullAge = true
// console.log(fullAge)

// var job
// console.log(job)

// job = "Teacher"
// console.log(job)


// // Variable naming rules
// var _3years = 3
// var $3years = 3

// // Variable mutation and type coersion

// var firstName = "John"
// var age = 28

// console.log(firstName + ' ' + age)

// var job, isMarried
// job = "teacher"
// isMarried = false

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

// //variable mutation
// age = "twenty eight"
// job = "driver"

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

// var lastName = prompt('What is his last name?')
// console.log(firstName + ' ' + lastName)

//Basic Operators

//Math Operators
// var now, yearJohn, yearMark, ageJohn, ageMark
// ageJohn = 28
// ageMark = 33
// now = 2018
// yearJohn = now - ageJohn
// yearMark = now - ageMark

// console.log(yearJohn)
// console.log(now + 2)
// console.log(now * 2)
// console.log(now / 10)

// //Logical Operators

// var johnOlder = ageJohn < ageMark
// console.log(johnOlder)

// //typeOf Operator

// console.log(typeof johnOlder)
// console.log(typeof ageJohn)


// Operator precedence 

// var now = 2018
// var yearJohn = 1989
// var fullAge = 18

// //Multiple Operators
// var isFullAge = now - yearJohn >= fullAge
// console.log(isFullAge)

// //Grouping
// var ageJohn = now - yearJohn
// var ageMark = 35
// var average = (ageJohn + ageMark) / 2
// console.log(average)

// var x, y
// x = (3 + 5) * 4 - 6 //26
// console.log(x)

// // More operators

// x *= 2
// console.log(x)
// x += 10
// console.log(x)
// x++
// console.log(x)


//CODING CHALLENGE 1

// var massMark, heightMark, massJohn, heightJohn
// massMark = 120
// heightMark = 67
// massJohn = 150
// heightJohn = 72

// let bmiMark = massMark / (heightMark ** 2)
// let bmiJohn = massJohn / (heightJohn ** 2)

// var markBmiHigher = bmiMark >= bmiJohn

// console.log(bmiMark)
// console.log(bmiJohn)
// console.log('Is Mark\'s BMI higher than John\'s?' + markBmiHigher)

// IF / ELSE STATEMENTS

// var firstName = "John"
// var civilStatus = "single"

// if (civilStatus === "married"){
//     console.log(firstName + ' is married')
// } else {
//     console.log(firstName + ' will hopefully marry soon')
// }

// var isMarried = true
// if (isMarried){
//     console.log(firstName + ' is married')
// } else {
//     console.log(firstName + ' will hopefully marry soon')
// }


// BOOLEAN LOGIC

// var firstName = "John"
// var age = 20

// if (age < 13) {
//     console.log(firstName + ' is a boy')
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager')
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man')
// } else {
//     console.log(firstName + ' is a man')
// }

// TERNARY OPERATOR AND SWITCH STATEMENTS

// var firstName = "John"
// var age = 14

// age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice')

// var drink = age >= 18 ? 'beer' : 'juice'
// console.log(drink)

// var job = "cop"

// switch (job) {
//     case "teacher":
//         console.log(firstName + ' teaches kids how to code')
//         break
//     case "driver":
//         console.log(firstName + " drives an uber")
//         break
//     default:
//         console.log(firstName + ' does something else')
// }

// var johnAvg = (89 + 120 + 103) / 3
// var mikeAvg = (116 + 94 + 123) / 3
// var maryAvg = (97 + 134 + 105) / 3

// johnAvg > mikeAvg
// ? console.log('John', johnAvg)
// : console.log('Mike', mikeAvg)

// if (johnAvg > mikeAvg && johnAvg > maryAvg){
//     console.log('John', johnAvg)
// } else if (mikeAvg > johnAvg && mikeAvg > maryAvg){
//     console.log('Mike', mikeAvg)
// } else if (maryAvg > johnAvg && maryAvg > mikeAvg){
//     console.log ('Mary', maryAvg)
// } else {
//     console.log('draw')
// }


// FUNCTIONS

// function calculateAge(birthYear) {
//     return 2018 - birthYear
// }

// var ageJohn = calculateAge(1990)
// var ageMike = calculateAge(1948)
// var ageJane = calculateAge(1969)
// console.log(ageJohn, ageMike, ageJane)

// function yearsUntilRetirement(year, firstName){
//     var age = calculateAge(year)
//     var retirement = 65 - age

//     if (retirement > 0){
//         console.log(firstName + ' retires in ' + retirement + ' years.')
//     } else {
//         console.log(firstName + ' is already retired')
//     }
// }

// yearsUntilRetirement(1990, "John")
// yearsUntilRetirement(1948, "Mike")
// yearsUntilRetirement(1969, "Jane")


// FUNCTION STATEMENTS AND EXPRESSIONS

//function declaration
// function whatDoYouDo(job, firstName){}

//function expression
// var whatDoYouDo = function (job, firstName) {
//     switch (job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.'
//         case 'driver':
//             return firstName + ' drives a cab in Lisbon.'
//         case 'designer':
//             return firstName + ' designs beautiful websites.'
//         default:
//             return firstName + ' does something else.'
//     }
// }

// console.log(whatDoYouDo('teacher', 'John'))
// console.log(whatDoYouDo('designer', 'Jane'))
// console.log(whatDoYouDo('retired', 'Mark'))

// ARRAYS

// var names = ['John', 'Mark', 'Jane']
// var years = new Array(1990, 1969, 1948)
// console.log(names[2])
// console.log(names.length)
// //mutate array data
// names[1] = 'Ben'
// names[5] = 'Mary'
// console.log(names)

//Different Data Types

// var john = ['John', 'Smith', 1990, 'teacher', false]
// var john = ['John', 'Smith', 1990, 'designer', false]
// john.push('blue')
// john.unshift('Mr.')
// john.pop()
// john.shift()
// console.log(john)

// console.log(john.indexOf(1990))
// console.log(john.indexOf(23))

// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer'
// console.log(isDesigner)