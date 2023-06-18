import { createBrowserRouter } from 'react-router-dom';
import Aulas from '../components/Aulas';

import Home from '../components/Home';
import Sobre from '../components/Sobre';
import App from '../App';
import ErrorPage from '../components/ErrorPage';
import ContactDetails from '../components/ContactDetails';
import Contatos from '../components/Contatos';


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
        element: <Contatos/>
      },
      // 5 - nested routes - identificador unico / unique id
      {
        path: '/contatos/:id',
        element: <ContactDetails/>
      }
    ]
  },
  
]);

export default router;