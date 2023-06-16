import './App.css';

import Header from './components/Header'

import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes'

function App() {
  return (
    <div className="App">
    <Header/>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
