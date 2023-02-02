import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/Home/HomePage';
import FormCreateProduct from './Components/Form/Form';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<HomePage />}/>
      <Route path='/formCreateProduct' element={<FormCreateProduct/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
