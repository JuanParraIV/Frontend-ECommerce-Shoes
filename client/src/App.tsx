import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home/HomePage';
import FormCreateProduct from './Components/FormCreateProduct/FormCreateProduct';
import CreateFormPage from './Pages/Form/CreateFormPage';
import SneakerPage from './Pages/Sneaker/SneakerPage';
import LoginPage from './Pages/Login/LoginPage';
import RegisterPage from './Pages/Register/RegisterPage';
import CartContainer from './Containers/Cart/CartConteiner';
import FormEditUserPage from './Pages/FormEditUser/FormEditUserPage';
import Profile from './Components/Profile/Profile';
import { CheckoutWithStripe } from './Components/Checkout/Checkout';
import ModificateProduct from './Components/FormModificateProduct/ModificateProduct';
import SneakersAdminContainer from './Containers/SneakersAdmin/SneakersAdminContainer';
import DashBoard from './Components/DashBoard/DashBoardMain';
import AboutUsContainer from './Containers/AboutUs/AboutUsContainer';
import CardsUsers from './Components/CardsUsers/CardsUsers';
import Orders from './Components/Orders/Orders';
import DefaultPageContainer from './Containers/DefaultPage/DefaultPage';
import UserProtected from './Components/Auth/userProtected';
import AdminProtected from './Components/Auth/adminProtected';
import UnAuthorizedContainer from './Containers/UnAuthorized/UnAuthorizedContainer';




function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='*' element={<DefaultPageContainer />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/product/:id' element={<SneakerPage />} />
        <Route path='/formCreateProduct' element={
          <AdminProtected>
          <CreateFormPage />
        </AdminProtected>
        } />
        <Route path='/shoppingCart' element={<CartContainer />} />
        <Route path='/unauthorized' element={<UnAuthorizedContainer />} />
        <Route path='/profile' element={
          <UserProtected>
            <Profile />
          </UserProtected>
        } />
        <Route path='/aboutUs' element={<AboutUsContainer />} />
        <Route path='/editprofile' element={
          <UserProtected>
            <FormEditUserPage />
          </UserProtected>
        } />
        <Route path='/checkout' element={
          <UserProtected>
        <CheckoutWithStripe />
          </UserProtected>
        } />
        <Route path='/modifproduct/:id' element={
          <AdminProtected>
          <SneakersAdminContainer />
        </AdminProtected>
        } />
        <Route path='/mainpaneladmin' element={
          <AdminProtected>
            <DashBoard />
          </AdminProtected>
        } />
        <Route path='/carduser' element={<CardsUsers />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
