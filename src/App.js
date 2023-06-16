import './App.css';
import Aulas from './components/Aulas';
import Header from './components/Header'
import Home from './components/Home';
import Sobre from './components/Sobre';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
]);

function App() {
  return (
    <div className="App">
    <Header/>
    <RouterProvider router={router}></RouterProvider>
    </div>


    // <Router>
    //   <div className="App">
    //     <Header/>

    //     <Route path='/'>
    //       <Home/>
    //     </Route>

    //     <Route path='/aulas'>
    //       <Aulas/>
    //     </Route>

    //     <Route path='/sobre'>
    //       <Sobre/>
    //     </Route>
        
    //   </div>
    // </Router>
  );
}

export default App;
