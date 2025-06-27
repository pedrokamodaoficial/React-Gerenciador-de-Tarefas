import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Importando o hook useNavigate do react-router-dom

function TaskPage() {
  const navigate = useNavigate(); // Importando o hook useNavigate do react-router-dom
  const [searchParams] = useSearchParams(); // Hook para acessar os parâmetros da URL, se necessário
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  // Aqui você pode definir o estado das tarefas, se necessário
  // const [tasks, setTasks] = useState([]);
  return (
    <div className="w-screen h-screen bg-slate-500 p-6 flex  justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)} // Navega para a página anterior
            // Isso significa que quando o usuário clicar no botão, ele será redirecionado para a página anterior
            // Ou seja, se o usuário estiver na página de detalhes da tarefa, ao clicar no botão, ele será redirecionado para a página de tarefas
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
