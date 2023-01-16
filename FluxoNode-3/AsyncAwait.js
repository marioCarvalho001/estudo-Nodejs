function sum(x){
  return new Promise((resolve, reject) => {
    if(x == ''){
      reject('erro')
    }
    setTimeout(() => {
      resolve(x + 5000)
    }, 3000) 
  })  
}

async function main(){
  try{
    const resultado = await sum('')
    console.log(resultado);
  } catch (error){
    console.log('erro' + error);
    console.log(process.env.USERNAME);
  }
}

main()

