import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validateProductForm from './validation';
import { FormContainer, LabelContainer, Button, Error } from './style';
import { useSneakerStore } from '@/App/store/useSneakerStore';
import api from '@/Api/backend_sneakers';
import { request } from 'http';
import { useNavigate } from 'react-router-dom';
// import dates from '../../../sneaker.json'
// import {useDispatch} from 'react-redux';

interface Props {
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

const FormCreateProduct = ({ name, brand_name, retail_price_cents, grid_picture_url, details, stock, status, category_name, color, size_range }: Props) => {

  const [formSend, setFormSend] = useState(false);
  // console.log("form enviado", setFormSend)
  const navigate = useNavigate()

  // const [products, setProducts] = useState<Props>({
  //   name: "",
  //   retail_price_cents: 0,
  //   grid_picture_url: "",
  //   stock: 0,
  //   brand_name: "",
  //   details: "",
  //   status: "",
  //   category_name: "",
  //   color: "",
  //   size_range: ""
  // })
  
  const routePostProduct = async () => {
    const response = await api.get(' http://localhost:5000/sneakers');
    return response.data
  };

  const addProduct = async (data: Props) => {
    const request = {
      ...data
    }
    const response = await api.post(" http://localhost:5000/sneakers", request)
    return response
  };





  return (
    <div>
      <FormContainer>
        <div >
          <Formik initialValues={{
            name,
            brand_name,
            retail_price_cents,
            grid_picture_url,
            details,
            stock,
            status,
            category_name,
            color,
            size_range
          }}

            onSubmit={(valores, { resetForm }) => {
              // routePostProduct();
              // console.log('route', routePostProduct)
              // resetForm();
              console.log( valores);
              // console.log('Formulario Enviado');
              // setFormSend(true);
              // navigate('/')
              // setTimeout(() => setFormSend(false), 5000);

            }}
              
            validate={(values) => validateProductForm(values)}
          >

            {({ errors, values, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <h1 className='text-gray-900 font-bold text-xl mb-2'>Create Product</h1>
                {/* {console.log(values)} */}

                <LabelContainer>

                  <div >
                    <label htmlFor='name' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Product Name</label>

                    <Field
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
                      type='text'
                      id='name'
                      name='name'
                      placeholder='Name'
                      value={values.name}
                      onChange={handleChange}
                    />
                    <Error>
                      <ErrorMessage name='name' component={() => (
                        <div >{errors.name}</div>
                      )} />
                    </Error>
                  </div>

                  <div >
                    <label htmlFor='retail_price_cents' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Price</label>
                    <Field
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
                      type='text'
                      id='retail_price_cents'
                      name='retail_price_cents'
                      placeholder='price'
                      value={values.retail_price_cents}
                      onChange={handleChange}
                    />
                    <Error>
                      <ErrorMessage name='price' component={() => (
                        <div>{errors.retail_price_cents}</div>
                      )} />

                    </Error>
                  </div>

                  <div >
                    <label htmlFor='stock' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Stock</label>
                    <Field
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
                      type='number'
                      id='stock'
                      name='stock'
                      placeholder='stock'
                      value={values.stock}
                      onChange={handleChange}
                    />
                    <Error>
                      <ErrorMessage name='stock' component={() => (
                        <div>{errors.stock}</div>
                      )} />

                    </Error>
                  </div>

                  <div >
                    <label htmlFor='brand_name' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Brand</label>
                    <Field className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe' 
                      name='brand_name' type='select' as='select'>
                      <option>Select Brand</option>
                      <option value='Air Jordan'>Air Jordan</option>
                      <option value='Champion'>Champion</option>
                      <option value='Converse'>Converse</option>
                      <option value='Gucci'>Gucci</option>
                      <option value='Nike'>Nike</option>
                      <option value='Vans'>Vans</option>
                      <option value='adidas'>adidas</option>
                      value={values.brand_name}
                      onChange={handleChange}
                    </Field>
                    <Error>
                      <ErrorMessage name='brand_name' component={() => (
                        <div>{errors.brand_name}</div>
                      )} />
                    </Error>
                  </div>

                  <div >
                    <label htmlFor='category_name' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Category</label>
                    <Field className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe' 
                    name='category_name' type='select' as='select'>
                      <option>Select Category</option>
                      <option value='lifestyle'>Lifestyle</option>
                      <option value='basketball'>Basketball</option>
                      <option value='running'>Running</option>
                      <option value='skateboarding'>Skateboarding</option>
                      <option value='other'>Other</option>
                      value={values.category_name}
                      onChange={handleChange}
                    </Field>
                    <Error>
                      <ErrorMessage name='category' component={() => (
                        <div>{errors.category_name}</div>
                      )} />
                    </Error>
                  </div>

                  <div >
                    <label htmlFor='color' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Color</label>

                    <Field
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
                      type='text'
                      id='color'
                      name='color'
                      placeholder='Color'
                      value={values.color}
                      onChange={handleChange}
                    />
                    <Error>
                      <ErrorMessage name='color' component={() => (
                        <div >{errors.color}</div>
                      )} />
                    </Error>
                  </div>

                  <div >
                    <label htmlFor='size_range' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Size</label>

                    <Field
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
                      type='number'
                      id='size_range'
                      name='size_range'
                      placeholder='Size'
                      value={values.size_range}
                      onChange={handleChange}
                    />
                    <Error>
                      <ErrorMessage name='size_range' component={() => (
                        <div >{errors.size_range}</div>
                      )} />
                    </Error>
                  </div>


                  <div className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'> Status
                    <hr />
                    <label >
                      <Field type='radio' name='status' value='New' />New
                    </label>
                    <label>
                      <Field type='radio' name='status' value='Used' />Used
                    </label>
                    <Error>
                      <ErrorMessage name='status' component={() => (
                        <div>{errors.status}</div>
                      )} />
                    </Error>
                  </div>
                  <div >
                    Details
                    <hr />
                    <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>
                      <Field className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe' 
                      name='details' 
                      as='textarea' 
                      placeholder='Details' 
                      value={values.details}
                      onChange={handleChange}
                      />
                    </label>
                    <Error>
                      <ErrorMessage name='description' component={() => (
                        <div>{errors.details}</div>
                      )} />
                    </Error>
                  </div>

                  <div>
                    <label htmlFor='grid_picture_url' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Image</label>
                    <Field
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
                      type='text'
                      id='grid_picture_url'
                      name='grid_picture_url'
                      value={values.grid_picture_url}
                      onChange={handleChange}
                    />
                    <Error>
                      <ErrorMessage name='image' component={() => (
                        <div>{errors.grid_picture_url}</div>
                      )} />
                    </Error>
                  </div>
                </LabelContainer>
                <Button>
                  <button type='submit'>Send</button>
                </Button>
                {formSend && <p className='exito'>Form successfully submitted</p>}

              </Form>
            )}
          </Formik>

        </div>
      </FormContainer>
    </div>
  );
};


export default FormCreateProduct ;