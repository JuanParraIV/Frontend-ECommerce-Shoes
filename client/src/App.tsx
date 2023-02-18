import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home/HomePage';
import FormCreateProduct from './Components/FormCreateProduct/FormCreateProduct';
import CreateFormPage from './Pages/Form/CreateFormPage';
import SneakerPage from './Pages/Sneaker/SneakerPage';
import LoginPage from './Pages/Login/LoginPage';
import RegisterPage from './Pages/Register/RegisterPage';
import CartContainer from './Containers/Cart/CartConteiner';
import FormEditUserPage from './Pages/FormEditUser/FormEditUserPage'
import Profile from './Components/Profile/Profile'
import { CheckoutWithStripe } from './Components/Checkout/Checkout';
import ModificateProduct from './Components/FormModificateProduct/ModificateProduct'
import DashBoard from './Components/DashBoard/DashBoard'


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/product/:id' element={<SneakerPage />} />
        <Route path='/formCreateProduct' element={<CreateFormPage />} />
        <Route path='/shoppingCart' element={<CartContainer/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='/editprofile' element={<FormEditUserPage/>}/>
        <Route path='/checkout' element={<CheckoutWithStripe/>}/>
        <Route path='/dashBoard' element={<ModificateProduct/>}/>
        <Route path='mainpaneladmin' element={<DashBoard/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
