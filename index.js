function logName(name) {
    console.log(`hello, ${name}, I've been waiting`)
}

const idA = 'Alps'
const idB = 'Bet'

logName (idA)
logName (idB)

const idAge = function(age) {
    if (age >= 18) {
    console.log('you will die')
} else if (age < 18 && age >= 0) {
    console.log ('you will die in spite')
} else {
    console.log('you are already dead')
  }
}

idAge(25)
idAge(10)
idAge(-1)

const addMarks = (text, mark, times) => {
    let newtxt = text
    
    for (let i = 0; i <= times; i++) {
        newtxt += mark
    }

    console.log(newtxt)
}

addMarks('Hola','!',1)
addMarks('Aloha','!',2)
addMarks('Hawaiiyu','?',1)
addMarks('Finethankyou','.',2)

const shownameAge = (name = 'Unknown', age = 0) => {
    const nameAge = `${name} is ${age} years old`

    return nameAge
}

const alphy = shownameAge('alphy', 11)
const beaty = shownameAge('Beaty', 400)
const bobby = shownameAge('Bobby', 30)

console.log(alphy)
console.log(beaty)
console.log(bobby)