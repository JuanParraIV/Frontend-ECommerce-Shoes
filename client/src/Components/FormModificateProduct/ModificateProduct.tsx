import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import api from '@/Api/backend_sneakers';
import Logo from '../Shared/Logo';
import SubmitButton from '../Shared/Form/submitButton';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { stat } from 'fs';
import { useSneakerStore } from '@/App/store/useSneakerStore';
import { useAuthStore } from '@/App/store/useAuthStore';
import { number } from 'yup';



interface FormData {
  id?: string,
  brand_name: string,
  category_name: string[];
  name: string;
  retail_price_cents: number,
  color: string,
  size_range: string[],
  grid_picture_url: string;
  original_picture_url: string;
  main_picture_url: string;
  details: string;
  stock: number;
  status: string;
  rating: number;
}


const ModificateProduct = () => {
  //const router = useRouter();
  const {id}= useParams()
  const { token } = useAuthStore(state => state);
  console.log("token",token)
  const { sneakers, singleSneaker,  fetchSneakers } = useSneakerStore(state => state);
  console.log("id,useparams",id)
  const navigate = useNavigate();
  const [sneaker, setSneaker] = useState<FormData>();
  const [errors, setErrors] = useState({
    id: 0,
    brand_name: '',
    category_name: [],
    name: '',
    retail_price_cents: 0,
    color: '',
    size_range: [],
    grid_picture_url: '',
    original_picture_url: '',
    main_picture_url: '',
    details: '',
    stock: 0,
    status: '',
    rating: 0
  });


  const [form, setForm] = useState<FormData>({
    id: `${id}`,
    brand_name: "",
    category_name: [],
    name: '',
    retail_price_cents: 0,
    color: '',
    size_range: [],
    grid_picture_url: '',
    original_picture_url: '',
    main_picture_url: '',
    details: '',
    stock: 0,
    status: '',
    rating: 0
  });





  const handleSubmit = async (data: FormData) => {
    console.log('data', data);
    try {
      await api.put('/sneakers',
      data
        , {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );
      setForm({
        id:"",
        brand_name: '',
        category_name: [],
        name: '',
        retail_price_cents: 0,
        color: '',
        size_range: [],
        grid_picture_url: '',
        original_picture_url: '',
        main_picture_url: '',
        details: '',
        stock: 0,
        status: '',
        rating: 0
      });
      // fetchSneakers()
      try {
        swal({
          title: "Excellent",
          text: "Product edited successfuly!",
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
      navigate('/mainpaneladmin');

    } catch (error) {
      console.log(error);
    }
  };

  const routePutSneaker = async ()=> {
    const response = await api.get('/sneakers');
    return response.data
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target as HTMLInputElement | HTMLSelectElement;

    setForm(() => ({
      ...form,
      [name]: value,
    }));

  };

  console.log(form)
  console.log(sneaker)

  useEffect(() => {
    if (sneakers) setSneaker(sneaker);
  }, [sneaker]);

  useEffect(() => {
    if (sneaker) setForm({
        id: sneaker.id,
        brand_name: sneaker.brand_name,
        category_name: sneaker.category_name,
        name: sneaker.name,
        retail_price_cents: sneaker.retail_price_cents,
        color: sneaker.color,
        size_range: sneaker.size_range,
        grid_picture_url: sneaker.grid_picture_url,
        original_picture_url: sneaker.original_picture_url,
        main_picture_url: sneaker.main_picture_url,
        details: sneaker.details,
        stock: sneaker.stock,
        status: sneaker.status,
        rating: sneaker.rating

    });
  }, [sneaker]);
  console.log('form',form);
  console.log(singleSneaker);

  function handleDelete(el: string) {
    setForm({
      ...form,
      size_range: form.size_range.filter(t => t !== el)
    });
  }

  function handleSelectSize(e: { target: { value: any; }; }) {
    setForm({
      ...form,
      size_range: [...new Set([...form.size_range, e.target.value])]
    });
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

  function handleDeleteCategory(el: string) {
    setForm({
      ...form,
      category_name: form.category_name.filter(t => t !== el)
    });
  }

  function handleSelectStatus(e: { target: { value: any; }; }){
    setForm({
      ...form,
      status: e.target.value
    })
  }


  return (
    <div className='bg-neutral-300 w-50'>
      <form className='flex flex-col w-full items-center justify-center gap-5 py-12' onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(form);
      }} >
        <Logo />
        <h1 className='text-center text-2xl text-[#F53F00] mt-10'>Edit Product</h1>
        <div className='flex relative flex-col  items-center justify-center gap-6 grid grid-cols-2 gap-4'>

          <div className='flex justify-end items-center relative'>Name Product
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
          <div className='flex justify-end items-center relative'>Price
            <input
              type="number"
              name='retail_price_cents'
              value={form.retail_price_cents}
              onChange={handleChange}
              placeholder='Price'
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400' />

            <div className="text-red-700 underline decoration-pink-500">
              {errors.retail_price_cents ?
                <p className='bg-red;'>{errors.retail_price_cents}</p> : null
              }

            </div>
          </div>

          <div className='flex justify-end items-center relative'>stock
            <input
              type="text"
              placeholder="Stock"
              name='stock'
              value={form.stock}
              onChange={handleChange}
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400'
            />

            <div className="text-red-700 underline decoration-pink-500">
              {errors.stock ?
                <p className='bg-red;'>{errors.stock}</p> : null
              }
            </div>
          </div>


          <div className='flex justify-end items-center relative'>Color
            <input
              type="text"
              placeholder="color"
              name='color'
              value={form.color}
              onChange={handleChange}
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400'
            />

            <div className="text-red-700 underline decoration-pink-500">
              {errors.color ?
                <p className='bg-red;'>{errors.color}</p> : null
              }
            </div>
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
           <select value={form.status} name='status' onChange={handleSelectStatus}>
           <option value='new'>New</option>
           <option value='used'>Used</option>
           </select>
            {/* <label >
              <input type='radio' name='status' value='new' onChange={handleChange} />New
            </label>
            <label>
              <input type='radio' name='status' value='used' onChange={handleChange} />Used
            </label> */}
          

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
            <input
              type="textarea"
              name='original_picture_url'
              value={form.original_picture_url}
              placeholder='Image'
              onChange={handleChange}
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400'
            />
            {errors.original_picture_url ?
              <p className='bg-red;'>{errors.original_picture_url}</p> : null
            }
          </div>

          <div className='flex justify-end items-center relative'>
            <input
              type="textarea"
              name='main_picture_url'
              value={form.main_picture_url}
              placeholder='Image'
              onChange={handleChange}
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400'
            />
            {errors.main_picture_url ?
              <p className='bg-red;'>{errors.main_picture_url}</p> : null
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
                  <p>{`${el},  `} </p>
                  <button className="buttonX" onClick={() => handleDeleteCategory(el)}>X</button>
                </div>
              )}
            </div>

            {errors.category_name ?
              <p className='bg-red;'>{errors.category_name}</p> : null
            }
          </div>

          <div className='flex justify-end items-center relative'>Rating
            <input
              type="text"
              name='rating'
              value={form.rating}
              onChange={handleChange}
              placeholder='Rating'
              className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400' />

            <div className="text-red-700 underline decoration-pink-500">
              {errors.rating ?
                <p className='bg-red;'>{errors.rating}</p> : null
              }

            </div>
          </div>


          <div className='p-2 w-[250px]'>
          </div >
          <div className='justify-self-center'>
            <SubmitButton text='Edit Product' />
          </div>
        </div>
        <span className=" rounded-lg w-[600px] h-0.5 bg-gray-200"></span>
      </form>
    </div>
  );
};
export default ModificateProduct;

