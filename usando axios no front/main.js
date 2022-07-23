const url =  "http://localhost:5500/api"

function getUsers(){
  axios .get(url)
  .then(response=>{
      apiResult.textContent = JSON.stringify(response.data)
  })
  .catch(err=>console.error(err))
}
function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response=>{
      // console.log(response.data)
        userID.textContent = response.data.id
        userName.textContent =  response.data.name
        userCity.textContent = response.data.city
        userAvatar.src = response.data.avatar
    })
    .catch(err=>console.error(err))
}

function addUser(newUser){
  axios.post(url, newUser)
  .then(response=> console.log(response))
  .catch(err=>console.error(err))
}

function updateUser(id, updatedUser ){
  axios.put(`${url}/${id}`, updatedUser)
  .then(response=>console.log(response))
  .catch(err=>console.error(err))
}

function deleteUser(id){
  axios.delete(`${url}/${id}`)
  .then(response=>console.log(response))
  .catch(err=>console.error(err))
}


const newUser = {
  name: "Vilma lina",
  avatar: "https://picsum.photos/200/300",
  city: "São José"
}
const updatedUser= {
  name: "Juvenal Juvencio",
  avatar: "https://picsum.photos/200/300",
  city: "Recife"
}


getUsers()
// addUser(newUser)
getUser(3)
// updateUser(3, updatedUser)
deleteUser(5)
