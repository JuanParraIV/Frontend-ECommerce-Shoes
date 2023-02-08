import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home/HomePage';
import FormCreateProduct from './Components/Form/FormCreateProduct';
import CreateFormPage from './Pages/Form/CreateFormPage';
import { ShoppingCartProvider } from './Context/ShoppingCartContainer';

function App() {

  return (
    <ShoppingCartProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/formCreateProduct' element={<CreateFormPage />} />
      </Routes>
    </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
