const fs = require('fs') // file system tools
const { exit } = require('process') // exit zum programm beenden

const file = 'tools.json' // festgelegt eine const wo datei liegen soll wie sie heißen soll
const tool = process.argv[2] // tool holen wir uns aus den argumenten, was in die Liste soll
const number = process.argv[3]

// Besipieldaten
// const data = [{ name: 'vim' }]
/* 
[
{name: 'vim'},
{name: 'mkdir'}
]
*/

fs.promises
  .readFile(file, { encoding: 'utf-8' })
  .then(addToolToJSON)
  .then(onWriteSucess)
  .catch(onError) // sobald oben ein Fehler gefunden wird, werden die nästen .then nicht mehr ausgeführt
// mehrere promises hintereinander hängen, anstatt callsbacks zu verschachteln

// example from fetch:
// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))

function addToolToJSON(data) {
  const tools = JSON.parse(data)
  tools.push({ name: tool, score: number })
  return fs.promises.writeFile(file, JSON.stringify(tools), {
    encoding: 'utf-8',
  })
}

function onWriteSucess() {
  exit(0)
}

function onError(error) {
  console.error(error)
}

//old style with nested callsbacks
// fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
//   // öffne tools.js in utf-8 formatiert + callback aufrufen + data: string
//   // bei einem Fehler soll tools ein Lehres Array sein, andernfalls ...
//   const tools = err ? [] : JSON.parse(data) // wandeln um in array tools ist jetzt ein Array mit den Objecten aus tools.json
//   tools.push({ name: tool, score: number }) // fügen array name: tools hinzu

//   // Datei speichern mit writeFile --> dafür array in string umwandeln + callback um zu prüfen ob erfolgreich oder nicht
//   fs.writeFile(file, JSON.stringify(tools), { encoding: 'utf-8' }, err => {
//     if (!err) {
//       tools.forEach(tool => console.log(tool.name + '\t' + tool.score))
//     }
//     exit(err ? 1 : 0)
//   })
// })
