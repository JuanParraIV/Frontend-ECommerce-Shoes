import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home/HomePage';
import FormCreateProduct from './Components/Form/FormCreateProduct';
import CreateFormPage from './Pages/Form/CreateFormPage';
import SneakerPage from './Pages/Sneaker/SneakerPage';
import Cart from './Components/Cart/Cart';

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:id' element={<SneakerPage />} />
        <Route path='/formCreateProduct' element={<CreateFormPage />} />
        <Route path='/shoppingCart' element={<Cart brand_name={''} quantity={0} id={undefined} details={''} grid_picture_url={''}/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
