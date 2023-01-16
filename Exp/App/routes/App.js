const express = require('express')
//Middwate de cookie
var cookierParser = require('cookie-parser');
const app = express()

app.use('/static', express.static('./static'))

//Para traabalhar com o json da req
app.use(express.json())
//Para traabalhar com o json da req
const AdminRouter = require('./route/Admin')

//Middlewate
app.use(cookierParser())
app.use((req, res, next) => {

  console.log('Exec middleware em nivel de app');

  return next()
})

//Middlewate para tratamento de erros

app.get('/b', (res, req, next) => {
  setImmediate(() => {
    next( new Error('Temos um problema'))
  })
})

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({message:err.message})
})

//Middlewate
app.get('/setcookei', (req, res) => {
  res.cookie('user', 'Mario', {maxAge:90000,httpOnly: true})
  return res.send('Cookei Gravado')
})

app.get('/getcookie', (req, res) => {
  let user = req.cookies['user']
  if(user){
    return res.send(user)
  }
})

app.get('/', (req,res) => {
  res.statusCode = 200
  res.send('Hello world')
})

app.use('/admin', AdminRouter)


app.listen(3000, ()=>{
  console.log('server running');
})