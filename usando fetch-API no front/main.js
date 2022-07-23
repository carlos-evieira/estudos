const url = "http://localhost:5500/api"

function getUsers(){
  fetch(url)
  .then(response=>response.json())
  .then(data=>renderApiResult.textContent = JSON.stringify(data))
  .catch(err=>console.error(err))
}

function getUser(){
  fetch(`${url}/${id}`)
  .then(response=>response.json())
  .then(data=>{
    userName.textContent = data.name
    userCity.textContent = data.city
    userAvatar.src = data.avatar
  })
  .catch(err=>console.error(err))
}

function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json; charset= UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => alertAPI.textContent= data) 
  .catch(err => console.error(err))
}

function updateUser(updatedUser, id){
  fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }

  })
  .then(response => response.json())
  .then(data => alertAPI.textContent= data) 
  .catch(err => console.error(err))
}

function deleteUser(id){
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
  .then(response => response.json())
  .then(data=>alertAPI.textContent=data)
  .catch(err => console.error(err))
}

const newUser = {
  name: "Joaquina lina",
  avatar: "https://picsum.photos/200/300",
  city: "São José"
}
// addUser(newUser)


const updatedUser= {
  name: "Juvenal Juvencio",
  avatar: "https://picsum.photos/200/300",
  city: "Recife"
}

// updateUser(updatedUser, 5)
deleteUser(2)
getUsers()
getUser(3)