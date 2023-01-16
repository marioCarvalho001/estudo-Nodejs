const path = require('path')


console.log(path.basename('C:\Users\\josia\/OneDrive\Área de Trabalho//NodeJS//Texto.txt'));
console.log(path.normalize('C:\Users\\josia\/OneDrive\Área de Trabalho//NodeJS//..'));
console.log(path.join('Users', 'josia','..'));
console.log(path.resolve('Texto.txt'));
console.log(path.extname('Texto.txt'));

