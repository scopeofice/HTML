
import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const changeState = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <Navbar title="My Website" darkMode={darkMode} changeState={changeState} />
      <About darkMode={darkMode} changeState={changeState} />
    </div>
  );
}
