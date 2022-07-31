import {useState, useEffect} from "react"
import { Card } from '../../Components/Card'
import './styles.css'

export function Home() {

 let [studentName, setStudentName] = useState(" ")
 const [students, setStudents] = useState([])

  function handleAddStudent(){
    const newStudent ={
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",

      })
    }
    if(studentName !=  " " && studentName != ""){
      setStudents(prevState=>[newStudent, ...prevState])
      // clearForm()
    }
  }

 
  
  // function clearForm(){
  
        
  // }
  useEffect(()=>{
    studentName = ""
    const clearInfo = document.getElementById("inputData")
    clearInfo.value= ""
    clearInfo.placeholder = 'Digite o nome do aluno' 
    
  }, [students])

  return (  
    <div className="container">
      <header>
        <h1>Lista de Chamada</h1>
        <div>
          <strong>Kadu Vieira</strong>
          <img src="https://github.com/carlos-evieira.png" alt="imagem do perfil" />
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
        students.map(student=><Card  key={student.time} name={student.name} time={student.time}/>)
      }
      
    </div>
  )
}


