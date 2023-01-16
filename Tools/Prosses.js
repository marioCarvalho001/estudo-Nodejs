require('./Subdir/Sub')
console.log('-----');

console.log(`Nome do Arquivo`, __filename);
console.log(`Diretorio do Arquivo`, __dirname);
console.log(`Diretorio em que foi invocado`, process.cwd());

//parâmetro referente aos passado no terminal ex: node Prosses -a arquivo.js

/* console.log(`Parâmetros de execução`, process.argv
); */

switch(process.argv[2]){

  case '-a' :
    console.log('Execute rotina principal');
    break;
  case '-i' :
    console.log('Execute instalação');
    break;
  case '-q' :
    console.log('Execute Aplicação');
    process.exit(); // interrompe o código
    break;
  default :
    console.log('Parâmetro Inválido');
    
}

console.log(`Ambiente do servidor`, process.platform);

console.log(`Sistema Operacional:`, process.env.OS);
console.log(`User do Sistema Operacional:`, process.env.USERNAME);
console.log(`Idioma:`, process.env.LANG);
console.log(`Nome do Server:`, process.env.COMPUTERNAME);