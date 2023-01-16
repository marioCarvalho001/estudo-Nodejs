const crypto = require("crypto");
const start = Date.now();

function logHashTime(){
  crypto.pbkdf2("a", "b", 100000, 512, "sha512",() => {
      console.log(`Hash: ${Date.now() - start}`);
  })
}

// Faz o processamento e divi pra 4 nucleos, nesse exemplo o quinto é o mais lento pq por padrão é usado 4

logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();