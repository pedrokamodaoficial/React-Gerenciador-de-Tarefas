import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Importando as funções necessárias do react-router-dom
// Importando o componente App que será renderizado na rota raiz
// Importando o componente TaskPage que será renderizado na rota "/task"
import TaskPage from "./pages/TaskPage.jsx";

const router = createBrowserRouter([
  //Usando o createBrowserRouter para definir as rotas da aplicação
  //Define as rotas da aplicação
  //Cada objeto representa uma rota com um caminho (path) e um elemento (element) a ser renderizado
  //O elemento é o componente que será renderizado quando a rota for acessada
  //O caminho é a URL que o usuário deve acessar para ver o componente correspondente
  //A primeira rota é a rota raiz ("/") que renderiza o componente App
  //A segunda rota é a rota "/task" que renderiza o componente TaskPage
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
  {},
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
