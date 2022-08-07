import React from 'react'
import {useState, useEffect} from "react"
import { Card, CardProps } from '../../Components/Card'
import './styles.css'

export function Home() {

 let [studentName, setStudentName] = useState()
 const [students, setStudents] = useState<CardProps[]>([])
 const [user, setUser] = useState({name:"", avatar:""})

  function handleAddStudent(){
    const newStudent ={
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",

      })
    }
    if(studentName != ""){
      setStudents(prevState=>[newStudent, ...prevState])
    }
  }

  useEffect(()=>{
    studentName = ""
    const clearInfo = document.getElementById("inputData")
    clearInfo.value= ""
  }, [students])

  useEffect(()=>{
    fetch('https://api.github.com/users/carlos-evieira')
    .then(response=>response.json())
    .then(data=>{
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    })
  }, [])

  return (  
    <div className="container">
      <header>
        <h1>Lista de Chamada</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="imagem do perfil" />
        </div>

      </header>
      
      <input id="inputData" 
            type="text" 
            placeholder='Digite o nome do aluno' 
            onChange={e=> setStudentName(e.target.value)} 
      />

      <button 
      type="button" 
      onClick={handleAddStudent}
      >Adicionar</button>
      
      {
        students.map(student=>
        <Card  
        key={student.time} 
        name={student.name} 
        time={student.time}
        />)
      }
      
    </div>
  )
}


