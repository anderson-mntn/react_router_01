import { createBrowserRouter, Navigate} from 'react-router-dom';

import Home from '../components/Home';
import Aula from '../components/Aula'
import Aulas from '../components/Aulas';
import Sobre from '../components/Sobre';
import App from '../App';
import ErrorPage from '../components/ErrorPage';
import ContactDetails from '../components/ContactDetails';
import Contatos from '../components/Contatos';
import Assistir from '../components/Assistir';


const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>,
    // Error page
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/aulas/",
        element: <Aulas/>,
      },
      {
        path: "/sobre",
        element: <Sobre/>
      },
      {
        path: "/assistir",
        element: <Assistir/>
      },
      {
        path: "/aulas/:id",
        element: <Aula />
      },
      {
        path: '/endereço',
        element: <p>Rua Avenida Brasil, 619, São Paulo</p>
      },
      {
        path: '/contatos',
        element: <Contatos/>
      },
      // 5 - nested routes - identificador unico / unique id - dynamic routes 
      {
        path: '/contatos/:id',
        element: <ContactDetails/>
      },
      // 7 - Navigate para páginas nao EXISTENTES.
      {
        path: "oldcontact",
        element: <Navigate to='/contatos/'/>
      }
    ]
  },
  
]);

export default router;