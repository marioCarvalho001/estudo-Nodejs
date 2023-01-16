const express = require('express')
const router = express.Router()



//middleware Func


function logReq(req, res, next){
  console.log('Exec a func Middlewate para user');
  return next()
}
// executa a func de midd e depois continua

router.get('/', logReq,(req,res) => {
  res.statusCode = 200
  res.send('Capturando o id:' + req.params.id)
})

router.post('/', (req,res) => {
  res.statusCode = 201
  const dat = `Login: ${req.body.login} \n senha ${req.body.senha}` 
  
  res.send(dat) 
})

module.exports = router