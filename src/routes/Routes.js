import { createBrowserRouter } from 'react-router-dom';
import Aulas from '../components/Aulas';

import Home from '../components/Home';
import Sobre from '../components/Sobre';
import Footer from '../components/Footer';
import App from '../App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/",
        element: <Footer/>
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
      ,
      {
        path: "*",
        element: <h4>The page you tryed to access is broken or unavaliable </h4>
      },

    ]
  },
  
]);

export default router;