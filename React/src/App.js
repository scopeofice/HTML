import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from './components/About'
import { useState } from "react";


function App() {

  

  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    
    <>

      <Navbar title='Shubham' mode={mode} toggleMode={toggleMode}/>
      <div className="container m-10">
      <TextForm mode={mode}/>
      <About mode={mode}/>
      </div>
    </>
  );
}

export default App;
