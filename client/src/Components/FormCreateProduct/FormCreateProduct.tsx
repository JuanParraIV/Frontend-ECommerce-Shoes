import React, { useEffect, useState } from 'react'

import api from '@/Api/backend_sneakers'
import Logo from '../Shared/Logo';
import LockIcon from '../Icons/lockIcon';
import EyeIcon from '../Icons/eyeIcon';
import SearchIcon from '../Icons/searchIcon';
import CheckInput from '../Shared/Form/inputCheck';
import SubmitButton from '../Shared/Form/submitButton';
import { Link } from 'react-router-dom';
import validateProductForm from './validation';
import { useNavigate } from 'react-router-dom';


interface FormData {
  name: string;
  retail_price_cents: number;
  grid_picture_url: string;
  stock: number;
  brand_name: string;
  details: string;
  status: string;
  category_name: string
  color: string
  size_range: string
}


const FormCreateProduct = () => {
  //const router = useRouter();
  const [sneaker, setSneaker] = useState([]);
  const [errors, setErrors] = useState({
  name: "",
  retail_price_cents: 0,
  grid_picture_url: "",
  stock: 0,
  brand_name: "",
  details: "",
  status: "",
  category_name: "",
  color: "",
  size_range: ""})
  const navigate = useNavigate();
  
  const [form, setForm] = useState<FormData>({
    name: "",
    retail_price_cents: 0,
    grid_picture_url: "",
    stock: 0,
    brand_name: "",
    details: "",
    status: "",
    category_name: "",
    color: "",
    size_range: ""
  });

  const routePostSneakers = async () => {
    const response = await api.get('/sneakers');
    return response.data
  }
  const addSneaker = async (data: FormData) => {
    const request = {
      ...data
  }
    const response = await api.post("/sneakers", request)
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
    // setErrors(validateProductForm({
    //   ...form,
    //   [name]:value
    // }))
  }

  const handleSubmit = async (data: FormData) => {
    try {
      addSneaker(data);
      setForm({
        name: "",
        retail_price_cents: 0,
        grid_picture_url: "",
        stock: 0,
        brand_name: "",
        details: "",
        status: "",
        category_name: "",
        color: "",
        size_range: ""
      });
      navigate('/')
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getAllSneaker = async () => {
      const allSneakers = await  routePostSneakers();
      if (allSneakers) setSneaker(allSneakers);
    }
    getAllSneaker();
  }, [])
  console.log(form)
  console.log(sneaker)


 


  return (
    <div className='bg-bg_primary w-50'>
      <form className='flex flex-col w-full items-center justify-center gap-5 py-12' onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(form);
      }} >
        <Logo />
        <h1 className='text-center text-2xl text-[#F53F00] mt-10'>Create New Product</h1>
        <div className='flex relative flex-col  items-center justify-center gap-5'>
        <div className='flex justify-end items-center relative'>
            <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='userName'
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400' />
           
           <div className="text-red-700 underline decoration-pink-500">
               {errors.name ?
                             <p className='bg-red;'>{errors.name}</p> : null 
                         }

           </div>
          </div>
          <div className='flex justify-end items-center relative'>
            <h1>Price</h1>
            <input
              type="text"
              name='retail_price_cents'
              value={form.retail_price_cents}
              onChange={handleChange}
              placeholder='Price'
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400' />
              {errors.retail_price_cents?
                             <p className='bg-red;'>{errors.retail_price_cents}</p> : null 
                         }
        
          </div>

          <div className='flex justify-end items-center relative'> 
            <input
              type="text"
              placeholder="Stock"
              name='stock'
              value={form.stock}
              onChange={handleChange}
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400'
            />
             {errors.stock?
                             <p className='bg-red;'>{errors.stock}</p> : null 
                         }
          </div>


          <div className='flex justify-end items-center relative'>
            <input
              type="number"
              name='size_range'
              value={form.size_range}
              placeholder='size'
              onChange={handleChange}
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400'
            />
            {errors.size_range?
                             <p className='bg-red;'>{errors.size_range}</p> : null 
                         }
          </div>
          

          <div className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Status
          <hr />
                    <label >
                      <input type='radio' name='status' value='New' />New
                    </label>
                    <label>
                      <input type='radio' name='status' value='Used' />Used
                    </label>

                    {errors.status?
                             <p className='bg-red;'>{errors.status}</p> : null 
                         }
          </div>

          <div className='flex justify-end items-center relative'>
            <input
              type="textarea"
              name='details'
              value={form.details}
              placeholder='Details'
              onChange={handleChange}
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400'
            />
            {errors.details?
                             <p className='bg-red;'>{errors.details}</p> : null 
                         }
          </div>

          <div className='flex justify-end items-center relative'>
            <input
              type="textarea"
              name='grid_picture_url'
              value={form.grid_picture_url}
              placeholder='Image'
              onChange={handleChange}
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400'
            />
            {errors.grid_picture_url?
                             <p className='bg-red;'>{errors.grid_picture_url}</p> : null 
                         }
          </div>

          <div  className='flex justify-end items-center relative'>

            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'></label>
                <select  value={form.brand_name} onChange={handleChange} placeholder='Brand'>
                <option>Select Brand</option>
                <option value='Air Jordan'>Air Jordan</option>
                <option value='Champion'>Champion</option>
                <option value='Converse'>Converse</option>
                <option value='Gucci'>Gucci</option>
                <option value='Nike'>Nike</option>
                <option value='Vans'>Vans</option>
                <option value='adidas'>adidas</option>
                </select>
                
                {errors.grid_picture_url?
                             <p className='bg-red;'>{errors.brand_name}</p> : null 
                         }
             </div>

             <div  className='flex justify-end items-center relative'>

               <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'></label>
                 <select  value={form.category_name} onChange={handleChange}>
                 <option>Select Category</option>
                  <option value='lifestyle'>Lifestyle</option>
                  <option value='basketball'>Basketball</option>
                  <option value='running'>Running</option>
                  <option value='skateboarding'>Skateboarding</option>
                  <option value='other'>Other</option>
               </select>
    
                 {errors.category_name?
                   <p className='bg-red;'>{errors.category_name}</p> : null 
                             }
             </div>

    
          <div className='p-2 w-[250px]'>    
          </div>
          <SubmitButton text='Create Product' />
        </div>
        <span className=" rounded-lg w-[600px] h-0.5 bg-gray-200"></span>
      </form>
    </div>
  )
}
export default FormCreateProduct; 
