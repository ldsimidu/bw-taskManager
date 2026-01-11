import { StepBackIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
    const navigate = useNavigate();
    
    function onBackClick() {
        navigate(-1);
    }

    const [searchParams] = useSearchParams();
    
    const title = searchParams.get("title")
    const description = searchParams.get("description")

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative mb-6">
                    <button onClick={onBackClick} className="absolute left-0 top-0 bottom-0 text-white bg-slate-400 rounded-md p-4">
                        <StepBackIcon />
                    </button>
                    <h1 className="text-3xl text-slate-100 font-bold text-center p-6">
                        Detalhes da tarefa
                    </h1>
                </div>
                <div className="space-y-4 pt-5 bg-slate-400 p-6 rounded-md shadow">
                    <h2 className="text-4xl text-white font-bold text-center">
                        {title}
                    </h2> 
                    <p className="text-xl text-white text-center">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TaskPage