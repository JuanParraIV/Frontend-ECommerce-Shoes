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
  name: string;
  retail_price_cents: number;
  grid_picture_url: string;
  stock: number;
  brand_name: any;
  details: string;
  status: string;
  category_name: string[];
  color: string;
  size_range: string[];
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
    category_name: [],
    color: "",
    size_range: []
  });
  const navigate = useNavigate();

  const [form, setForm] = useState<FormData>({
    name: "",
    retail_price_cents: 0,
    grid_picture_url: "",
    stock: 0,
    brand_name: "",
    details: "",
    status: "",
    category_name: [],
    color: "",
    size_range: []
  });

  const { sneakers } = useSneakerStore(state => state);
  const { token } = useAuthStore(state => state);

  const handleSubmit = async (data: FormData) => {

    try {
      await api.post('/sneakers',
        data
        , {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });
      setForm({
        name: "",
        retail_price_cents: 0,
        grid_picture_url: "",
        stock: 0,
        brand_name: "",
        details: "",
        status: "",
        category_name: [],
        color: "",
        size_range: []
      });
      swal({
        title: "Excellent",
        text: "Product Created successfully!",
        icon: "success",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
          }
        },
      });
      navigate('/');

    } catch (error) {
      console.log(error);
    }
  };


  const routePostSneakers = async () => {
    const response = await api.get('/sneakers');
    return response.data;
  };




  const handleChange = (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target as HTMLInputElement | HTMLSelectElement;

    setForm(() => ({
      ...form,
      [name]: value,
    }));

  };


  function handleSelectBrand(e: { target: { value: any; }; }) {
    setForm({
      ...form,
      brand_name: e.target.value
    });
  };

  function handleSelectCategory(e: { target: { value: any; }; }) {
    setForm({
      ...form,
      category_name: [...new Set([...form.category_name, e.target.value])]
    });
  };

  function handleSelectSize(e: { target: { value: any; }; }) {
    setForm({
      ...form,
      size_range: [...new Set([...form.size_range, e.target.value])]
    });
  };

  function handleDelete(el: string) {
    setForm({
      ...form,
      size_range: form.size_range.filter(t => t !== el)
    });
  }

  function handleDeleteCategory(el: string) {
    setForm({
      ...form,
      category_name: form.category_name.filter(t => t !== el)
    });
  }


  useEffect(() => {
    const getAllSneaker = async () => {
      const allSneakers = await routePostSneakers();
      if (allSneakers) setSneaker(allSneakers);
    };
    getAllSneaker();
  }, []);
  console.log(form);
  console.log(sneaker);





  return (
    <div className='bg-bg_primary w-50'>
      <form className='flex flex-col w-full items-center justify-center gap-5 py-12' onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(form);
      }} >
        <Logo />
        <h1 className='text-center text-2xl text-[#F53F00] mt-10'>Create New Product</h1>
        <div className='flex relative flex-col  items-center justify-center gap-5'>
          <div className='flex justify-end items-center relative'>UserName
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
              type="number"
              name='retail_price_cents'
              value={form.retail_price_cents}
              onChange={handleChange}
              placeholder='Price'
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400' />
            {errors.retail_price_cents ?
              <p className='bg-red;'>{errors.retail_price_cents}</p> : null
            }

          </div>

          <div className='flex justify-end items-center relative'> Stock
            <input
              type="text"
              placeholder="Stock"
              name='stock'
              value={form.stock}
              onChange={handleChange}
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400'
            />
            {errors.stock ?
              <p className='bg-red;'>{errors.stock}</p> : null
            }
          </div>

          <div className='flex justify-end items-center relative'> Color
            <input
              type="text"
              placeholder="color"
              name='color'
              value={form.color}
              onChange={handleChange}
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400'
            />
            {errors.color ?
              <p className='bg-red;'>{errors.color}</p> : null
            }
          </div>


          <div className='flex justify-end items-center relative'>

            <div> size
              <select value={form.size_range} name='types' onChange={handleSelectSize} >
                <option value='10'>10</option>
                <option value='10.5'>10.5</option>
                <option value='11'>11</option>
                <option value='11.5'>11.5</option>
                <option value='12'>12</option>
                <option value='12.5'>12.5</option>
                <option value='13'>13</option>
                <option value='13.5'>13.5</option>
                <option value='14'>14</option>
                <option value='14.5'>14.5</option>
                <option value='15'>15</option>
                <option value='16'>16</option>
                <option value='16.5'>16.5</option>
                <option value='17'>17</option>
                <option value='17.5'>17.5</option>
                <option value='18'>18</option>
                <option value='3.5'>3.5</option>
                <option value='4'>4</option>
                <option value='4.5'>4.5</option>
                <option value='5'>5</option>
                <option value='5.5'>5.5</option>
                <option value='6'>6</option>
                <option value='6.5'>6.5</option>
                <option value='7'>7</option>
                <option value='7.5'>7.5</option>
                <option value='8'>8</option>
                <option value='8.5'>8.5</option>
                <option value='9'>9</option>
                <option value='9.5'>9.5</option>
              </select>

              {form.size_range.map(el =>
                <div>
                  <p >{el}</p>
                  <button className="buttonX" onClick={() => handleDelete(el)}>X</button>
                </div>
              )}
            </div>

            {errors.size_range ?
              <p className='bg-red;'>{errors.size_range}</p> : null
            }
          </div>


          <fieldset className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
            <legend>Status</legend>
            <hr />
            <label>
              <input type='radio' name='status' value='New' onChange={handleChange} />New
            </label>
            <label>
              <input type='radio' name='status' value='Used' onChange={handleChange} />Used
            </label>

            {errors.status &&
              <p className='bg-red;'>{errors.status}</p>
            }
          </fieldset>

          <div className='flex justify-end items-center relative'>
            <input
              type="textarea"
              name='details'
              value={form.details}
              placeholder='Details'
              onChange={handleChange}
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400'
            />
            {errors.details ?
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
            {errors.grid_picture_url ?
              <p className='bg-red;'>{errors.grid_picture_url}</p> : null
            }
          </div>

          <div className='flex justify-end items-center relative'>

            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'></label>
            <select value={form.brand_name} onChange={handleSelectBrand} placeholder='Brand'>
              <option>Select Brand</option>
              <option value='Air Jordan'>Air Jordan</option>
              <option value='Champion'>Champion</option>
              <option value='Converse'>Converse</option>
              <option value='Gucci'>Gucci</option>
              <option value='Nike'>Nike</option>
              <option value='Vans'>Vans</option>
              <option value='adidas'>adidas</option>
            </select>

            {errors.grid_picture_url ?
              <p className='bg-red;'>{errors.brand_name}</p> : null
            }
          </div>
          <div>

            <div className='flex justify-end items-center relative'>

              <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'></label>
              <select value={form.category_name} onChange={handleSelectCategory}>
                <option>Select Category</option>
                <option value='lifestyle'>Lifestyle</option>
                <option value='basketball'>Basketball</option>
                <option value='running'>Running</option>
                <option value='skateboarding'>Skateboarding</option>
                <option value='other'>Other</option>
              </select>

              {form.category_name.map(el =>
                <div>
                  <p>{el}</p>
                  <button className="buttonX" onClick={() => handleDeleteCategory(el)}>X</button>
                </div>
              )}
            </div>

            {errors.category_name ?
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
  );
};
export default FormCreateProduct;
