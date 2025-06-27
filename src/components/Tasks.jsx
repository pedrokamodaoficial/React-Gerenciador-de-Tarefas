import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Importando o hook useNavigate do react-router-dom

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate(); // Importando o hook useNavigate do react-router-dom

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams(); // Cria uma nova instância de URLSearchParams para construir a query string
    // Essa instância será usada para construir a query string da URL
    // A query string é a parte da URL que contém os parâmetros de consulta
    // Por exemplo, na URL "/task?title=Estudar%20programação&description=Estudar%20programação%20para%20se%20tornar%20um%20desenvolvedor%20Full-Stack", a query string é "?title=Estudar%20programação&description=Estudar%20programação%20para%20se%20tornar%20um%20desenvolvedor%20Full-Stack"

    query.set("title", task.title); // Adiciona o parâmetro title com o valor do título da tarefa
    query.set("description", task.description); // Adiciona o parâmetro description com a descrição da tarefa
    //Essa função será chamada quando o usuário clicar no botão de ver detalhes
    //Ela recebe a tarefa como parâmetro
    //E usa o hook useNavigate para navegar para a página de detalhes da tarefa

    navigate(`/task?${query.toString()}`); // Navega para a página de detalhes da tarefa
    //A URL será algo como "/task?title=Estudar%20programação&description=Estudar%20programação%20para%20se%20tornar%20um%20desenvolvedor%20Full-Stack."
    //Isso significa que a página de detalhes da tarefa receberá os parâmetros title e description na URL
    //E poderá exibi-los na tela
  }
  // tasks é uma prop que contém o array de tarefas
  // onTaskClick é uma função que será chamada quando o usuário clicar em uma tarefa
  // onDeleteTaskClick é uma função que será chamada quando o usuário clicar no botão de deletar
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)} //Ao clicar no botão, chama a função onTaskClick passando o id da tarefa
            //Essa função está definida no componente App.jsx
            //Ela atualiza o estado das tarefas, mudando o status de concluída para pendente e vice-versa
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`} //Adicionando JavaScript e Tailwind CSS para estilizar o botão
            //Se a tarefa estiver concluída, adiciona a classe "line-through" para riscar o texto
            //Caso contrário, não adiciona essa classe
          >
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)} //Ao clicar no botão, chama a função onDeleteTaskClick passando o id da tarefa
            //Essa função está definida no componente App.jsx
            //Ela atualiza o estado das tarefas, removendo a tarefa clicada
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
