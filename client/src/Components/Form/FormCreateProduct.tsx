import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validateProductForm from './validation';
import { FormContainer, LabelContainer, Button, Error } from './style';
// import dates from '../../../sneaker.json'
// import {useDispatch} from 'react-redux';

interface Props {
  name: string;
  price: number;
  image: string;
  stock: number;
  brand: string;
  description: string;
  status: string;
}

const FormCreateProduct = ({ name, brand, price, image, description, stock, status }: Props) => {

  const [formSend, setFormSend] = useState(false);
  return (
    <div>
      <FormContainer>
        <div >
          <Formik initialValues={{
            name,
            brand,
            price,
            image,
            description,
            stock,
            status
          }}

            onSubmit={(valores, { resetForm }) => {
              resetForm();
              console.log(valores);
              console.log('Formulario Enviado');
              setFormSend(true);
              setTimeout(() => setFormSend(false), 5000);
            }}
            validate={(values) => validateProductForm(values)}
          >

            {({ errors }) => (
              <Form >
                <h1 className='text-gray-900 font-bold text-xl mb-2'>Create Product</h1>

                <LabelContainer>

                  <div >
                    <label htmlFor='name' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Name</label>

                    <Field
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
                      type='text'
                      id='name'
                      name='name'
                      placeholder='Name'
                    />
                    <Error>
                      <ErrorMessage name='name' component={() => (
                        <div >{errors.name}</div>
                      )} />
                    </Error>
                  </div>

                  <div >
                    <label htmlFor='price' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Price</label>
                    <Field
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
                      type='text'
                      id='price'
                      name='price'
                      placeholder='price'
                    />
                    <Error>
                      <ErrorMessage name='price' component={() => (
                        <div>{errors.price}</div>
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
                    />
                    <Error>
                      <ErrorMessage name='stock' component={() => (
                        <div>{errors.stock}</div>
                      )} />

                    </Error>
                  </div>

                  <div >
                    <label htmlFor='brand' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Brand</label>
                    <Field className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe' name='brand' as='select'>
                      <option>Select Brand</option>
                      <option value='Air Jordan'>Air Jordan</option>
                      <option value='Champion'>Champion</option>
                      <option value='Converse'>Converse</option>
                      <option value='Gucci'>Gucci</option>
                      <option value='Nike'>Nike</option>
                      <option value='Vans'>Vans</option>
                      <option value='adidas'>adidas</option>
                    </Field>
                    <Error>
                      <ErrorMessage name='brand' component={() => (
                        <div>{errors.brand}</div>
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
                    Description
                    <hr />
                    <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>
                      <Field className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe' name='description' as='textarea' placeholder='Description' />
                    </label>
                    <Error>
                      <ErrorMessage name='description' component={() => (
                        <div>{errors.description}</div>
                      )} />
                    </Error>
                  </div>

                  <div>
                    <label htmlFor='image' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Image</label>
                    <Field
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
                      type='text'
                      id='image'
                      name='image'
                    />
                    <Error>
                      <ErrorMessage name='image' component={() => (
                        <div>{errors.image}</div>
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


export default FormCreateProduct;
