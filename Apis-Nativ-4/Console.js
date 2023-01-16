console.log('Exibindo uma mensagem no Console.log');

//Erro

console.error(new Error('Exibindo Error'))

const carros = ['Gm', 'ford', 'vw']

//exibe os dados em form de tabela

console.table(carros)

const dados = {name: 'mario', function: 'programador'}

console.table(dados)

//Soma as operação de contagem
console.count('process')
console.count('process')
console.count('process')

// reseta a contagem do count / não exibe nada

console.countReset('process')
console.count('process')

// Exebe o tempo que o processo de uma func leva para termina

console.time('contador')
for(let index = 0; index < 100; index++){
  /* console.log('-'); */
}
console.timeEnd('contador')

// Verifica se uma função está exibindo algum erro

console.assert(true, 'Faça aluma coisa')
console.assert(false, 'erro')

// limpa os dados do console
/* console.clear() */

