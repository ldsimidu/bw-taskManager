import { ChevronRightIcon, Trash2  } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
    return (
        <ul className="space-y-4 pt-5 bg-gray-100 p-6 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button 
                        onClick={() => onTaskClick(task.id)} 
                        className={`bg-slate-400 text-left text-white p-2 rounded-md w-full 
                        ${task.isCompleted && 'line-through'
                    }`}
                    >
                        {task.title}
                        {/* {task.isCompleted ? ":COMPLETE" : ":INCOMPLETE"} */}
                    </button>
                    <button className="bg-slate-400 text-white p-2 rounded-md">
                        <ChevronRightIcon />
                    </button>
                    <button
                        onClick={() => onDeleteTaskClick(task.id)} 
                        className="bg-slate-400 text-white p-2 rounded-md">
                        <Trash2 />
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Tasks;