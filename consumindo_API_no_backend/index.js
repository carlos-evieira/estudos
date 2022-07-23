const express = require('express');
const axios = require('axios')

const app = express();
const port = '3000'

app.listen(port, () => {
  console.log('listening at port ' + port)
  console.log('stop serv using ctrl + c')
})

app.route('/').get((req, res)=> {
  axios.get('https://api.github.com/users/carlos-evieira')
   .then(result=> res.send(`<img src = "${result.data.avatar_url}"/> `))
   .catch((err)=>console.error(err))
})