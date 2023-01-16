//Criação de pasta e arquivos

const fs = require('fs')
const {writeFile} = require('fs')

const assets = ['css', 'js', 'fonts', 'lib']

function make(dirs){
  dirs.forEach((dir) => {
    fs.mkdir(dir,{recursive:true}, (err) =>{
      if(err) throw err;
      console.log('diretorio criado com sucesso');
    })
  })
}

//Criação de arquivo

/* writeFile("arquivo.txt", 'Criando arquivo de texto', err => {
  if(err) throw err;
  console.log('Arquivo Criado');
}) */

//criação de arquivo usando promiss usando o modo Util

const {promisify} = require('util')

const writeFile2 = promisify(require('fs').writeFile);
const conteudo = 'criando arquivo usnaod promisify'

/* writeFile2('texto.txt', conteudo).then(() => {
  console.log('Arquivo criado com sucesso');
}).catch((err) => {
  console.log(err);
}) */

//criação de arquivo usando promiss usando o modo FS

function criaArquivo(name, content){
  return new Promise((res, rej) => {
    writeFile(name, content, err => {
      if(err) return rej(err)
      res()
    })
  })
}

/* criaArquivo('texto.txt', 'criando arquivo ultilizando promises').then(() => console.log('arquivo criado')).catch(err => console.log(err)) */

//Utilizando Async e Await

const fs2 = require('fs').promises

async function read(){
  const data = await fs2.readFile('texto.txt', 'binary')
  return new Buffer.from(data)
}

try{
  read().then(data => console.log(data.toString()))
}catch (err){
  console.log(err);
}