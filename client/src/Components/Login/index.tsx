import Logo from '../Shared/Logo';
import CheckInput from '../Shared/Form/inputCheck';
import PasswordInput from '../Shared/Form/passwordInput';
import SubmitButton from '../Shared/Form/submitButton';
import TextInput from '../Shared/Form/textInput';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuthStore } from '@/App/store/useAuthStore';

export interface LoginData {
  userName: string;
  password: string;
}
const LoginForm = () => {
  const {token, authLogin}= useAuthStore(state => state);
  console.log(token)
  const [form, setForm] = useState<LoginData>({
    userName: "",
    password: "",
  });
  console.log(form)

 /*  const LoginUsers = async (data: LoginData) => {
    const response = await api.post("/auth/login", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json"
      }
    })
    return response
  } */

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target  as HTMLInputElement

    setForm(() => ({
      ...form,
      [name]: value,
    }));
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const resLogin=await authLogin(form);
      console.log(resLogin)
      setForm({
        userName: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
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

        <div>
          <CheckInput name='Remember me.' value='remember' />
        </div>
        <SubmitButton text='Log In' />
      </div>
      <span className=" rounded-lg w-[600px] h-0.5 bg-gray-200"></span>

      <h1 className='text-center'>Don't have an account? <Link to={'/register'}><a className=' text-primary underline cursor-pointer'>Sign up</a></Link> instead.</h1>

    </form>
  );
};

export default LoginForm;
