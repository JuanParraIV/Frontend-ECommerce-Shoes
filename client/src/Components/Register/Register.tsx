import React, { useEffect, useState } from 'react'

import api from '@/Api/backend_sneakers'
import Logo from '../Shared/Logo';
import LockIcon from '../Icons/lockIcon';
import EyeIcon from '../Icons/eyeIcon';
import SearchIcon from '../Icons/searchIcon';
import CheckInput from '../Shared/Form/inputCheck';
import SubmitButton from '../Shared/Form/submitButton';
import { Link } from 'react-router-dom';
import validateRegisterForm from './validation';
import { useNavigate } from 'react-router-dom';


interface FormData {
  userName: string;
  email:string;
  password: string;
  password2: string;
  retype?: string;
  id?: string;
}


const RegisterForm = () => {
  //const router = useRouter();
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({userName:"", email: "", password: "", password2: ""})
  const navigate = useNavigate();

  const [form, setForm] = useState<FormData>({
    userName: "",
    email:"",
    password: "",
    password2: "",
  });

  const retrieveContacts = async () => {
    const response = await api.get('/user');
    return response.data
  }
  const addUsers = async (data: FormData) => {
    const request = {
      ...data
  }
    const response = await api.post("/user", request)
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
    setErrors(validateRegisterForm({
      ...form,
      [name]:value
    }))
  }

//   

  const handleSubmit = async (data: FormData) => {
    try {
      addUsers(data);
      setForm({
        userName: "",
        email:"",
        password: "",
        password2: "",
      });
      navigate('/login')
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
    <div className='w-50'>
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
              name='userName'
              value={form.userName}
              onChange={handleChange}
              placeholder='userName'
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400' />

              <br/>
               {errors.userName ?
                             <p className='bg-red;'>{errors.userName}</p> : null
                         }
          </div>
          <div className='flex justify-end items-center relative'>
            <input
              type="text"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Email'
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400' />
              {errors.email?
                             <p className='bg-red;'>{errors.email}</p> : null
                         }

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
             {errors.password?
                             <p className='bg-red;'>{errors.password}</p> : null
                         }

          </div>

          <div className='flex justify-end items-center relative'>
            <input
              type="password"
              required
              name='password2'
              value={form.password2}
              placeholder='Retype Password'
              onChange={handleChange}
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400'
            />
            {errors.password2?
                             <p className='bg-red;'>{errors.password2}</p> : null
                         }
          </div>




          <div className='p-2 w-[250px]'>
            <CheckInput name='' value='void' />
            <br/>
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
