const { log } = require('console');
const fs = require('fs')

fs.readdir(__dirname, (err, data) => {
  if(err) throw err;

  data.forEach((file) => [
    /* console.log(file) */
  ])
})

//lendo arquivo

fs.readFile('texto.txt', (err,data) => {
  if(err) throw err;

  console.log(data.toString());
})
//forma Bloqueante
const texto = fs.readFileSync('texto.txt')

console.log(texto.toString());