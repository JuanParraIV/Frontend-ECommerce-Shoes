import Logo from '../Shared/Logo';
import CheckInput from '../Shared/Form/inputCheck';
import PasswordInput from '../Shared/Form/passwordInput';
import SubmitButton from '../Shared/Form/submitButton';
import TextInput from '../Shared/Form/textInput';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthStore } from '@/App/store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import LoginAuth0Button from '../Shared/Form/LoginThirdParty';
import { useAuth0 } from '@auth0/auth0-react';
import { useGoogleAuthStore } from '@/App/store/useAuthGoogleStore';
import jwt_decode from "jwt-decode";
import swal from 'sweetalert';

export interface LoginData {
  userName: string;
  password: string;
}

interface DecodedToken {
  user_id: string;
  user_rol: string;
  exp: number;
  userName?: string;
}
const LoginForm = () => {
  const { loginWithRedirect} = useAuth0();
  const { token, profile, authLogin, getProfile, getAdminProfile } = useAuthStore(state => state);
  const navigate = useNavigate();
  const [form, setForm] = useState<LoginData>({
    userName: "",
    password: "",
  });
  console.log(form);
  console.log(token);


  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;

    setForm(() => ({
      ...form,
      [name]: value,
    }));
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const token = await authLogin(form);
      const decodedToken = jwt_decode<DecodedToken>(token);
      console.log(decodedToken.user_id);
      console.log(decodedToken.user_rol);
      console.log(token);
      console.log(decodedToken);
      let mensajeBienvenida = `¡Welcome, ${form.userName}!`;
      if (decodedToken.user_rol === "admin") {
        const resAdminProfile = await getAdminProfile();
        console.log(resAdminProfile);
      } else {
        const resProfile = await getProfile();
        console.log(resProfile);
      }
      setForm({
        userName: "",
        password: "",
      });
      navigate('/');
      swal({
        title: "¡Welcome!",
        text: mensajeBienvenida,
        icon: "success",
        buttons: {
          confirm: {
            text: "¡Cool!",
            value: true,
            visible: true,
            className: "",
            closeModal: true,
          },
        },
      });
    }   catch (error) {
      console.log(error);
    }
  };

  const handleGoogleAuth0 = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      loginWithRedirect();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
    <form onSubmit={handleSubmit} className='flex flex-col w-full items-center justify-center gap-5 py-12'>
      <Logo />
      <h1 className='text-center text-2xl text-[#F53F00] mt-10'>Welcome Back</h1>
      <div className='flex relative flex-col  items-center justify-center gap-5'>
        <TextInput
          placeholder='User Name'
          name='userName'
          value={form.userName}
          onChange={handleChange}
          />
        <PasswordInput
          placeholder='Password'
          name='password'
          value={form.password}
          onChange={handleChange}
        />
        <div>
          <a href="" className='absolute text-red-600 underline text-xs right-0'>Forgot Password</a>
        </div>
        <SubmitButton text='Log In' />
      </div>
    </form>
    <div className='flex flex-col w-full items-center justify-center gap-5 '>
      <div className='flex relative flex-col  items-center justify-center gap-5'>
      <LoginAuth0Button text='Log in with Google ' onClick={handleGoogleAuth0}/>

      </div>
      <span className=" rounded-lg w-[600px] h-0.5 bg-gray-200"></span>
      <h1 className='text-center'>Don't have an account? <Link to={'/register'}><a className=' text-primary underline cursor-pointer'>Sign up</a></Link> instead.</h1>
    </div>
          </>
  );
};

export default LoginForm;
