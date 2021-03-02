// // ES6 syntax: import hello from './hello'
// const hello = require('./hello') // commonjs syntax
// hello()

// Log out random Number
// // const random = require('./random')
// // console.log(process.argv[2])
// // console.log(random(3)) // random from 0-10

// const random = require('./random')
// console.log(process.argv)
// const max = Number(process.argv[2])
// console.log(random(max))

// const read = require('./read.js')
// read('hello.js')

const addStudent = require('./addStudent.js')
const [, , name, role] = process.argv
addStudent({ name, role, php: false })
