const express = require('express');
const app = express();
const port = '3000'

app.listen(port, () => {
  console.log('listening at port ' + port)
  console.log('stop serv using ctrl + c')
})

// middlware   
app.use(express.json())


app.route('/').get((req, res) => {
  const {nome, cidade} = req.query
  res.send(`sou ${nome} da cidade ${cidade}`)
}) 
// app.route('/:variavel').get((req, res) => res.send(req.params.variavel) )
// app.route('/nome/:variavel').get((req, res) => res.send(req.params.variavel) )

