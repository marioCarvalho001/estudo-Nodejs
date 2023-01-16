const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const app = express()
const path = require('path')

app.use(bodyParser.urlencoded({extended:true}))


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.filename+'-'+Date.now()+path.extname(file.originalname))
  }
})

const upload = multer({storage})

app.get('/', (req, res) =>{
  res.sendFile(__dirname+'/Form/Form.html')
})

app.post('/upload', upload.single('arquivo'), (req, res, next) => {
  const file = req.file
  if(!file){
    const err = new Error('Por favor selecione um arq')
    err.httpStatusCode = 400
    return next(err)
  }
  res.send(file)
} )



app.listen(3000, '127.0.0.1', () => {
  console.log('Server running port 3000');
})