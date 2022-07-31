const express = require('express')
const app = express()
const serv = "3000"

app.listen(serv, ()=>{
  console.log("servidor rodando na porta " + serv)
  console.log("para encerrar o sercidor apertar ctrl + c")
})

// middleware 
app.use(express.json())

let author = 'Kadu'

app.route('/').get((req, res) => res.send(author))
 
app.route('/').put((req, res) => {  
  author = req.body.author
  res.send(author)
})

 
app.route('/:id').delete((req, res) => {  
  res.send(req.params.id)
})