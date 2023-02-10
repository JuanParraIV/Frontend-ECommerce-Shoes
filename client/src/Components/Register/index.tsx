import React, { useEffect, useState } from 'react'

import api from '@/Api/backend_sneakers'
import Logo from '../Shared/Logo';
import LockIcon from '../Icons/lockIcon';
import EyeIcon from '../Icons/eyeIcon';
import SearchIcon from '../Icons/searchIcon';
import CheckInput from '../Shared/Form/inputCheck';
import SubmitButton from '../Shared/Form/submitButton';
import { Link } from 'react-router-dom';


interface FormData {
  email: string;
  password: string;
  country: string;
  lang: string;
  retype?: string;
  id?: string;
}


const RegisterForm = () => {
  //const router = useRouter();
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
    country: "",
    lang: ""
  });

  const retrieveContacts = async () => {
    const response = await api.get('/users');
    return response.data
  }
  const addUsers = async (data: FormData) => {
    const request = {
      ...data
    }
    const response = await api.post("/users", request)
  }

  const refreshPage = () => {
    //router.replace(router.asPath);
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target as HTMLInputElement | HTMLSelectElement;

    setForm(() => ({
      ...form,
      [name]: value,
    }));

  }

  const handleSubmit = async (data: FormData) => {
    try {
      addUsers(data);
      setForm({
        email: "",
        password: "",
        country: "",
        lang: ""
      });
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await retrieveContacts();
      if (allUsers) setUsers(allUsers);
    }
    getAllUsers();
  }, [])
  console.log(form)
  console.log(users)


  return (
    <div className='bg-bg_primary w-50'>
      <form className='flex flex-col w-full items-center justify-center gap-5 py-12' onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(form);
      }} >
        <Logo />
        <h1 className='text-center text-2xl text-[#F53F00] mt-10'>Create your Account</h1>
        <div className='flex relative flex-col  items-center justify-center gap-5'>
          <div className='flex justify-end items-center relative'>
            <input
              type="text"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Email'
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400' />
            <LockIcon />
          </div>

          <div className='flex justify-end items-center relative'>
            <input
              type="password"
              required
              placeholder="Password"
              name='password'
              value={form.password}
              onChange={handleChange}
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400'
            />
            <EyeIcon />
          </div>

          <div className='flex justify-end items-center relative'>
            <input
              type="password"
              required
              placeholder='Retype Password'
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400'
            />
            <EyeIcon />
          </div>

          <div className='flex w-[280px] justify-start items-center relative'>
            <SearchIcon />
            <select
              name='country'
              onChange={handleChange}
              className='rounded-3xl w-full text-primary bg-white p-3 border border-gray-200 px-10'>
              <option value="" selected>Country of Residence</option>
              <option value="Colombia">Colombia</option>
              <option value="USA">USA</option>
              <option value="CANADA">CANADA</option>
            </select>
          </div>

          <div className='flex w-[280px] justify-start items-center relative'>
            <select
              name='lang'
              onChange={handleChange}
              className='rounded-3xl w-full text-primary bg-white p-3 border border-gray-200 px-10'>
              <option value="" selected>Select your language</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>


          <div className='p-2 w-[250px]'>
            <CheckInput name='' value='void' />
            <h1 className='text-xs text-justify'>By continuing I agree to the <Link to={'/'}><a className=' text-primary underline cursor-pointer'>Terms of Services</a></Link> and <Link to={'/'}><a className=' text-primary underline cursor-pointer'>Privacy Policy</a></Link></h1>
          </div>
          <SubmitButton text='Sign up' />
        </div>
        <span className=" rounded-lg w-[600px] h-0.5 bg-gray-200"></span>

        <h1 className='text-center'>Have an account? <Link to={'/login'}><a className=' text-primary underline cursor-pointer'>Log In</a></Link> instead.</h1>

      </form>
    </div>
  )
}
export default RegisterForm
