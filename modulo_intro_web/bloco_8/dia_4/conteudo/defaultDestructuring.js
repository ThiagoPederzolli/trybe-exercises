// // const person = {
// //   name: "João",
// //   lastName: "Jr",
// //   age: 34
// // }


// // const { nationality } = person / irá retornar undefined
// // const { nationality = "Brazilian" } = person
// // console.log(nationality) // Brazilian

// const position2d = [1.0, 2.0]
// const [x, y, z = 0] = position2d

// // console.log(z) // 0


const nationality = ({ firstName, nationality }) => (nationality === undefined) ?`${firstName} is ${nationality = "Brazilian"}` : `${firstName} is ${nationality}`;

const person = {
    firstName: "João",
    lastName: "Jr II"
}

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
}

console.log(nationality(otherPerson)) // Ivan is Russian
console.log(nationality(person))