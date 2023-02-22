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
import SneakersAdminContainer from './Containers/SneakersAdmin/SneakersAdminContainer';
import DashBoard from './Components/DashBoard/DashBoardMain'
import AboutUsContainer from './Containers/AboutUs/AboutUsContainer';
import CardsUsers from './Components/CardsUsers/CardsUsers';
import Orders from './Components/Orders/Orders';




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
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/aboutUs' element={<AboutUsContainer/>}/>
        <Route path='/editprofile' element={<FormEditUserPage/>}/>
        <Route path='/checkout' element={<CheckoutWithStripe/>}/>
        <Route path='/modifproduct/:id' element={<SneakersAdminContainer/>}/>
        <Route path='/mainpaneladmin' element={<DashBoard/>}/>
        <Route path='/carduser' element={<CardsUsers/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
