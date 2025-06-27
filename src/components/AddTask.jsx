import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  // Esta função recebe uma prop chamada onAddTaskSubmit
  // Essa prop é uma função que será chamada quando o usuário clicar no botão de adicionar tarefa
  // Ela será definida no componente App.jsx e passada como prop para este componente
  const [title, setTitle] = useState(""); // Estado para armazenar o título da tarefa
  const [description, setDescription] = useState(""); // Estado para armazenar a descrição da tarefa

  // A função onAddTaskSubmit será chamada quando o usuário clicar no botão de adicionar tarefa

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Título da tarefa"
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title} // O valor do input será o estado title
        // Isso significa que o input será controlado pelo estado title
        // Ou seja, quando o usuário digitar algo no input, o estado title será atualizado
        // E o valor do input será atualizado automaticamente
        onChange={(e) => setTitle(e.target.value)} // Atualiza o estado title com o valor digitado pelo usuário
        // A função setTitle é chamada com o valor do input quando o usuário digita algo
        // Isso garante que o estado title seja atualizado com o valor do input
        //(e) => setTitle(e.target.value) // Atualiza o estado title com o valor do input
        // e.target.value é o valor atual do input
        // Ou seja, quando o usuário digita algo no input, o estado title será atualizado com esse valor
      />
      <input
        type="text"
        placeholder="Descrição da tarefa"
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          //Verufucar se está vazio
          if (title.trim() === "" || description.trim() === "") {
            // Verifica se o título ou a descrição estão vazios
            // Se o título ou a descrição estiverem vazios, exibe um alerta e não chama a função onAddTaskSubmit
            // Isso significa que quando o usuário clicar no botão, se o título ou a descrição estiverem vazios, um alerta será exibido
            // E a função onAddTaskSubmit não será chamada
            // Ou seja, a tarefa não será adicionada se o título ou a descrição estiverem vazios
            alert("Por favor, insira um título e uma descrição para a tarefa.");
            return; // Se o título ou a descrição estiverem vazios, exibe um alerta e não chama a função onAddTaskSubmit
          }
          onAddTaskSubmit(title, description);
          setTitle(""); // Limpa o campo de título após adicionar a tarefa
          // Isso significa que quando o usuário clicar no botão, o campo de título será limpo
          // E o usuário poderá digitar uma nova tarefa sem precisar apagar manualmente o título anterior
          setDescription("");
        }} // Chama a função onAddTaskSubmit passando o título e a descrição da tarefa
        // Isso significa que quando o usuário clicar no botão, a função onAddTaskSubmit será chamada com os valores do título e da descrição
        // Essa função está definida no componente App.jsx e será responsável por adicionar a nova tarefa ao estado das tarefas
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTask;
