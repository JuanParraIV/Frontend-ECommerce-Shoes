import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/Home/HomePage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<HomePage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
