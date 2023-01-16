const fs = require("fs")

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Executando o console Antes da leitura do arquivo");

//Arquivo File leve de mais para exemplo, mas este processo é bloquiante
const dados = fs.readFileSync("./file.txt");

console.log("Executando o console após o arquivo");

console.log((process.hrtime()[0]/60).toFixed(5))