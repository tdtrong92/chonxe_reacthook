import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chonxe_useState from './Chonxe_useState/Chonxe_useState';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import UseEffectDemo from './Pages/Hook/UseEffectDemo/UseEffectDemo';
import UseStateDemo from './Pages/Hook/UseStateDemo/UseStateDemo';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {

  return (

    <div className="App">
      <Chonxe_useState />
    </div>

  );
}

export default App;
