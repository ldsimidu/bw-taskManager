import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Jogar The Legend Of Zelda: Tears Of Kingdom",
    description: "Encontrar Zelda",
    isCompleted: false
  }, {
    id: 2,
    title: "Jogar The Witcher 3",
    description: "Salvar Ciri",
    isCompleted: false
  }, {
    id: 3,
    title: "Assistir Formula 1",
    description: "Canal: Band, 10h da manhã do sabado",
    isCompleted: false
  }]);
  
  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks}/>
        <AddTask/>
      </div>
    </div>
  )
}

export default App;