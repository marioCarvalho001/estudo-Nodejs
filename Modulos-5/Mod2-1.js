console.log('Mod1 exec');
//deixar em const para o dados não escapar do exports
const oculta = () => {
  console.log('Executando func oculta');
}

const exc2 = () => {
  console.log('Exec func de exc');
}
const welcome = 'Welcome Module export'


module.exports = {exc2, welcome}