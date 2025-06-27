import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Armazena as tarefas no localStorage
    //Isso significa que quando o componente App for montado, as tarefas serão salvas no localStorage
    //E quando o usuário recarregar a página, as tarefas serão carregadas do localStorage
    //Isso garante que as tarefas persistam mesmo após o recarregamento da página
    //Ou seja, as tarefas não serão perdidas quando o usuário sair da página e voltar mais tarde
  }, [tasks]);

  //Função para mudar o estado das tarefas - de pendente para concluída
  function onTaskClick(TaskId) {
    //taskId é o id da tarefa que foi clicada
    //Essa função será passada como prop para o componente Tasks
    //Quando o usuário clicar no botão de tarefa, essa função será chamada com o id da tarefa clicada
    //E o estado das tarefas será atualizado
    //O objetivo é alternar o estado da tarefa entre concluída e pendente
    //Ou seja, se a tarefa estiver pendente, ela será marcada como concluída e vice-versa
    const newTasks = tasks.map((task) => {
      //PRECISO ATUALIZAR A TAREFA QUE FOI CLICADA
      if (task.id === TaskId) {
        return { ...task, isCompleted: !task.isCompleted };
      } //Não é necessário um else, pois o return abaixo já garante que as outras tarefas não serão alteradas
      //NÃO PRECISO ATUALIZAR AS OUTRAS TAREFAS
      return task;
    });
    setTasks(newTasks); //Atualiza o estado das tarefas
  }

  //Função para deletar uma tarefa
  function onDeleteTaskClick(taskId) {
    //taskId é o id da tarefa que será deletada
    //Essa função será passada como prop para o componente Tasks
    //Quando o usuário clicar no botão de deletar, essa função será chamada com o id da tarefa a ser deletada
    const newTasks = tasks.filter((task) => task.id !== taskId); // Filtra as tarefas, removendo a tarefa com o id igual ao taskId
    //Isso significa que a tarefa com o id igual ao taskId não será incluída no novo array newTasks
    //Ou seja, a tarefa será removida
    //O filter retorna um novo array com as tarefas restantes
    //Assim, a tarefa deletada não estará mais presente no estado tasks
    //E o componente Tasks será atualizado automaticamente com as novas tarefas
    setTasks(newTasks);
  }

  //Função para adicionar uma nova tarefa
  function onAddTaskSubmit(tittle, description) {
    const newTask = {
      id: v4(), //Gera um novo id aleatório usando a biblioteca uuid
      //O v4() gera um id único aleatório, garantindo que cada tarefa tenha um id exclusivo
      //Isso é importante para identificar cada tarefa de forma única
      //E evitar conflitos de ids ao adicionar novas tarefas
      //O id será usado para identificar a tarefa ao clicar ou deletar
      title: tittle, //Título da tarefa
      description: description, //Descrição da tarefa
      isCompleted: false, //Estado inicial da tarefa é pendente
    };
    setTasks([...tasks, newTask]); //Atualiza o estado das tarefas, adicionando a nova tarefa ao final do array
    //O operador spread (...) é usado para criar um novo array que contém todas as tarefas existentes, mais a nova tarefa
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />{" "}
        {/* Passando a função de adicionar tarefa como prop */}
        {/* Aqui você pode passar a função onAddTaskSubmit como prop para o componente AddTask */}
        {/* Isso permitirá que o componente AddTask chame essa função quando o usuário clicar no botão de adicionar tarefa */}
        {/* O componente AddTask receberá essa função como prop e a chamará quando o usuário clicar no botão de adicionar tarefa */}
        <Tasks
          tasks={tasks} //Passando o estado das tarefas como prop
          //Isso significa que o componente Tasks receberá o array de tarefas como prop
          //E poderá renderizar as tarefas na tela
          //O componente Tasks receberá essa prop e poderá usá-la para renderizar as tarefas
          //Ou seja, o componente Tasks terá acesso ao array de tarefas e poderá exibi-las na tela
          onTaskClick={onTaskClick} //Passando a função de mudar o estado da tarefa como prop
          onDeleteTaskClick={onDeleteTaskClick} //Passando a função de deletar tarefa como prop
        />
        {/* Aqui você pode passar as tarefas como props */}
      </div>
    </div>
  );
}

export default App;
