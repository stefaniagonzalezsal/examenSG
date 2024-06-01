import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Inicio from "./componets/Inicio";
import Home from "./componets/home";
import Usuarios from "./componets/Usuarios";


const router = createBrowserRouter([
  //Importar los componentes con sus respectivas rutas
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/home",
    element: <Home />
  },
  {
  path: "/usuario",
  element: <Usuarios />
  }
]);
function App() {
 

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
