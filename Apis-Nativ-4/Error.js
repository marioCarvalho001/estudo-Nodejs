
function execute(){
  executeTo()
}

function executeTo(){
  throw new Error('Error de Error.js')
}

function init(){
  try{
    execute()
  } catch(error) {
    console.log('error no catch');
    console.log(error);
    console.log('depois do error');
  }
}

//Error eventEmitter

const {EventEmitter} = require('events');
const { emit } = require('process');
const emitter = new EventEmitter()

const validaObjet = (a) => {
  if(typeof a !== 'object'){
    emitter.emit('error', new Error('Tipo informado Inválido'))
  } else {
    console.log('Objeto válido');
  }
  
}

emitter.addListener('error', (err) => {
  console.log('Event' + err.message);
})

let dados = {dados: 'Dados'}

validaObjet(dados)