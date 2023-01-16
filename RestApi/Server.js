require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.set("strictQuery", true);

mongoose.connect(process.env.DATABASE_STRING, {useNewUrlParser: true, useUnifiedTopology:true})
const db = mongoose.connection
db.on('error', (err) => console.log(`Error de conexao`))
db.once('open', () => console.log(`Database conectado`))

app.use(express.json())

const subsRouter = require('./routs/sub')
app.use('/subs', subsRouter)

app.listen(3000, () => {
  console.log('Servidor Ativo');
})