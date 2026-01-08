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

  function onTaskClick(taskId) {
    // PARA CADA TASK DA LISTA DE TASK
    const newTasks = tasks.map(task => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }

      // NÃO PRECISO ATUALIZAR ESTA TAREFA
      return task;
    })

    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTask = tasks.filter((task) => task.id != taskId)
    setTasks(newTask)
  }
  
  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
        <AddTask/>
      </div>
    </div>
  )
}

export default App;