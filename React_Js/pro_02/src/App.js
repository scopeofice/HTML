import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './component/Home';
import { Route,Routes } from 'react-router-dom';
import Login from './component/Login';
import Registeration from './component/Registeration';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registeration/>}/>
        </Routes>
          </div>
  );
}

export default App;
