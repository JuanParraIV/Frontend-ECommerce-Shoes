import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/Home/HomePage';
import FormCreateProduct from './Components/Form/FormCreateProduct';

function App(){

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<HomePage />}/>
      <Route path='/formCreateProduct' element={<FormCreateProduct name={''} price={0} image={''} stock={0} brand={''} description={''} status={''}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
