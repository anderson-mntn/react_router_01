import { createBrowserRouter } from 'react-router-dom';
import Aulas from '../components/Aulas';

import Home from '../components/Home';
import Sobre from '../components/Sobre';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
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
    element: <div>aula a1</div>
  },
  {
    path: "*",
    element: <h4>The page you tryed to access is broken or unavaliable </h4>
  },
]);

export default router;