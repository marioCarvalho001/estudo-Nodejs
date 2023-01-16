const {EventEmitter} = require('events')

class Evento extends EventEmitter{}

const meuEvento = new Evento()

//preparando o que vai ser passado
meuEvento.on('seguranca', (x,y) => {
  console.log(`Executando o evento: ${x} ${y}`);
})

//enviando os dados
meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salario')

meuEvento.on('encerrar', (dados) => {
  console.log('Assinante: ' + dados);
})

meuEvento.emit('encerrar', 'encerrou a assinatura')