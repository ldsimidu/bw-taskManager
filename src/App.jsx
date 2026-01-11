import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Task 01 title",
    description: "Task 01 description",
    isCompleted: false
  }, {
    id: 2,
    title: "Task 02 title",
    description: "Task 02 description",
    isCompleted: false
  }, {
    id: 3,
    title: "Task 03 title",
    description: "Task 03 description",
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

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }
  
  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
        
      </div>
    </div>
  )
}

export default App;