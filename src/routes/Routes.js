import { createBrowserRouter } from 'react-router-dom';
import Aulas from '../components/Aulas';

import Home from '../components/Home';
import Sobre from '../components/Sobre';
import App from '../App';
import ErrorPage from '../components/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/aulas",
        element: <Aulas/>,
      },
      {
        path: "/sobre",
        element: <Sobre/>
      },
      {
        path: "/aulas/a1",
        element: <h3>aula a1</h3>
      },
      {
        path: '/endereço',
        element: <p>Rua Avenida Brasil, 619, São Paulo</p>
      },
      {
        path: '/contatos',
        element: <p>Tel: 11 4002-8922, Whatsapp: 99765-4321</p>
      }
    ]
  },
  
]);

export default router;