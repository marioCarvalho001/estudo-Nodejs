const Buffer = require('buffer').Buffer

const buf = Buffer.from('Curso completo de node')

console.log(buf.toString('utf16le'));

const but_string = Buffer.from('Carregando utf', 'utf8')

console.log(Buffer.isBuffer(but_string));
console.log(but_string.toString('utf-8', 0, 5));