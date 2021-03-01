// ES6 syntax: import hello from './hello'
const hello = require('./hello') // commonjs syntax
hello()

// const random = require('./random')
// console.log(process.argv[2])
// console.log(random(3)) // random from 0-10

const random = require('./random')
console.log(process.argv)
const max = Number(process.argv[2])
console.log(random(max))
