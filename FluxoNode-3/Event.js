const EventEmitter = require('events')

class  Evento extends EventEmitter{}

const meuEvento = new Evento()


//criando o evento
meuEvento.on('seguranca', (x,y)=>{
  console.log(`Executou evento de segurança ${x} ${y}`);
})

//disparando o evento
meuEvento.emit('seguranca', 'userAdmin', 'alterou salario')