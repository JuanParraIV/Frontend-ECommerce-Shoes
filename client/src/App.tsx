import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home/HomePage';
import FormCreateProduct from './Components/Form/FormCreateProduct';
import CreateFormPage from './Pages/Form/CreateFormPage';
import SneakerPage from './Pages/Sneaker/SneakerPage';

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:id' element={<SneakerPage />} />
        <Route path='/formCreateProduct' element={<CreateFormPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
