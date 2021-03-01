const fs = require('fs') // file system

module.exports = function read(path) {
  // selbe function wie unten nur neuer:
  fs.promises
    .readFile(path, { encoding: 'utf-8' })
    .then(data => console.log(data.split('\n').length))
    .catch(err => console.log('ERROR', err))

  // old style with callback instead of Promise:
  // // log out text from file
  // fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
  //   if (err) {
  //     console.log('ERROR', err)
  //   } else {
  //     //   console.log(data)
  //     // new line character option + shift + 7 = \
  //     console.log(data.split('\n').length)
  //   }
  // })
}
