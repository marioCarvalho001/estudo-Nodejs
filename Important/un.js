const fs = require("fs")

//Esse exemplo é para não usar metodos bloqueante com não bloqueante, vou dar dois exemplos o errado e o certo. Na compilação não deve funcionar por causa do tamanho do arquivo mas a ideia é que o segundo processo onde o arquivo é excluido ele não vai esperar o processo de leitura terminar

//erro
fs.readFile("file.txt", (err, data) => {
  if(err) throw err;
  console.log(data);
})
fs.unlinkSync("./file.txt")

//certo

fs.readFile("file.txt", (err, data) => {
  if(err) throw err;
  console.log(data);
  
  fs.unlink("./file.txt", (unlinkErr) => {
    if(unlinkErr) throw unlinkErr;
    console.log('Arquivo Excluido');
  })
})
