import './App.css';
import Footer from './components/Footer';

import Header from './components/Header'
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
