import { ChevronRightIcon } from "lucide-react";

function Tasks(props) {
    return (
        <ul className="space-y-4 pt-5 bg-gray-100 p-6 rounded-md shadow">
            {props.tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button 
                        onClick={() => props.onTaskClick(task.id)} 
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
                </li>
            ))}
        </ul>
    )
}

export default Tasks;