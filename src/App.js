import './App.css';
import Aulas from './components/Aulas';
import Header from './components/Header'
import Home from './components/Home';
import Sobre from './components/Sobre';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Aulas/>
      <Sobre/>
    </div>
  );
}

export default App;
