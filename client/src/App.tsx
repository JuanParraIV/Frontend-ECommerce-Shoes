import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Components/Home/Home';
import ContenedorHome from './Components/Home/style';
function App() {

  return (
    <ContenedorHome>
      <Home
        name='Mario'
        apellido='ParrAAa'
        edad={29}
      />
    </ContenedorHome>

  );
}

export default App;
