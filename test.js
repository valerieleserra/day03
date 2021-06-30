const myName = 'Val'

console.log('Hello ' + myName)
// define a function for isDrinkingAge
// given an age say if someone is drinking age or not
function isDrinkingAge(age) {
    if (age < 21) {
        return console.log('Not Drinking Age')
    } else {
        return console.log('Legal Drinking Age')
    }