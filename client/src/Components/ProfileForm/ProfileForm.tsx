import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import api from '@/Api/backend_sneakers';
import Logo from '../Shared/Logo';
import SubmitButton from '../Shared/Form/submitButton';
import { Link } from 'react-router-dom';
import validateProductForm from './validation';
import { useNavigate } from 'react-router-dom';
import { stat } from 'fs';
import { useSneakerStore } from '@/App/store/useSneakerStore';
import { useAuthStore } from '@/App/store/useAuthStore';



interface FormData {
  id?: number,
  userName: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  buyerAddress: string;
  email: string;
  password: string;
  dni: string;
}


const EditProfileUser = () => {
  //const router = useRouter();
  const navigate = useNavigate();
  const [user, setUser] = useState<FormData>();
  const [errors, setErrors] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    buyerAddress: '',
    email: '',
    password: '',
    dni: ''
  });

  const [form, setForm] = useState<FormData>({
    id: 0,
    userName: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    buyerAddress: '',
    email: '',
    password: '',
    dni: ''
  });


  const { token, profile, getProfile } = useAuthStore(state => state);


  const handleSubmit = async (data: FormData) => {
    console.log(data);
    try {
      await api.put('/user',
        data
        , {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );
      setForm({
        userName: '',
        firstName: '',
        lastName: '',
        contactNumber: '',
        buyerAddress: '',
        email: '',
        password: '',
        dni: ''
      });
      getProfile();
      try {
        swal({
          title: "Excellent",
          text: "Profile edited successfuly!",
          icon: "success",
          buttons: {
            confirm: {
              text: "Ok",
              value: true,
              visible: true,
              className: "rounded-3xl bg-yellow-400 text-black text-center w-full px-5 py-2 my-8",
              closeModal: true,
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
      navigate('/profile');

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target as HTMLInputElement | HTMLSelectElement;

    setForm(() => ({
      ...form,
      [name]: value,
    }));

  };

  useEffect(() => {
    if (profile) setUser(profile);
  }, [profile]);

  useEffect(() => {
    if (user) setForm({
      id: user.id,
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      contactNumber: user.contactNumber,
      buyerAddress: user.buyerAddress,
      email: user.email,
      password: user.password,
      dni: user.dni
    });
  }, [user]);
  console.log(form);
  console.log(user);

  return (
    <div className='bg-neutral-300 w-50'>
      <form className='flex flex-col w-full items-center justify-center gap-5 py-12' onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(form);
      }} >
        <Logo />
        <h1 className='text-center text-2xl text-[#F53F00] mt-10'>Edit Your Profile</h1>
        <div className='flex relative flex-col  items-center justify-center gap-6 grid grid-cols-2 gap-4'>
          <div className='flex justify-end items-center relative'>User Name
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
              type='text'
              name='userName'
              placeholder='User Name'
              value={form.userName}
              onChange={handleChange} />

            <div className="text-red-700 underline decoration-pink-500">
              {errors.userName ?
                <p className='bg-red;'>{errors.userName}</p> : null
              }

            </div>
          </div>
          <div className='flex justify-end items-center relative'>First Name
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
              type='text'
              name='firstName'
              placeholder='First Name'
              value={form.firstName}
              onChange={handleChange}
            />

            <div className="text-red-700 underline decoration-pink-500">
              {errors.firstName ?
                <p className='bg-red;'>{errors.firstName}</p> : null
              }

            </div>
          </div>

          <div className='flex justify-end items-center relative'>Last Name
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={form.lastName}
              onChange={handleChange} />

            <div className="text-red-700 underline decoration-pink-500">
              {errors.lastName ?
                <p className='bg-red;'>{errors.lastName}</p> : null
              }
            </div>
          </div>


          <div className='flex justify-end items-center relative'>Contact Number
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
              type='text'
              name='contactNumber'
              placeholder='Contact Number'
              value={form.contactNumber}
              onChange={handleChange} />

            <div className="text-red-700 underline decoration-pink-500">
              {errors.contactNumber ?
                <p className='bg-red;'>{errors.contactNumber}</p> : null
              }
            </div>
          </div>

          <div className='flex justify-end items-center relative'>Address
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
              type='text'
              name='buyerAddress'
              placeholder='Address'
              value={form.buyerAddress}
              onChange={handleChange} />

            <div className="text-red-700 underline decoration-pink-500">
              {errors.buyerAddress ?
                <p className='bg-red;'>{errors.buyerAddress}</p> : null
              }
            </div>
          </div>

          <div className='flex justify-end items-center relative'>Email
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
              type='text'
              name='email'
              placeholder='Email'
              value={form.email}
              onChange={handleChange} />

            <div className="text-red-700 underline decoration-pink-500">
              {errors.email ?
                <p className='bg-red;'>{errors.email}</p> : null
              }
            </div>
          </div>

          <div className='flex justify-end items-center relative'>Password
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
              type='password'
              name='password'
              placeholder='Password'
              value={form.password}
              onChange={handleChange} />

            <div className="text-red-700 underline decoration-pink-500">
              {errors.password ?
                <p className='bg-red;'>{errors.password}</p> : null
              }
            </div>
          </div>

          <div className='flex justify-end items-center relative'>Identity Document
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
              type='text'
              name='dni'
              placeholder='Identity Document'
              value={form.dni}
              onChange={handleChange} />

            <div className="text-red-700 underline decoration-pink-500">
              {errors.dni ?
                <p className='bg-red;'>{errors.dni}</p> : null
              }
            </div>
          </div>


          <div className='p-2 w-[250px]'>
          </div >
          <div className='justify-self-center'>
            <SubmitButton text='Edit Profile' />
          </div>
        </div>
        <span className=" rounded-lg w-[600px] h-0.5 bg-gray-200"></span>
      </form>
    </div>
  );
};
export default EditProfileUser;
