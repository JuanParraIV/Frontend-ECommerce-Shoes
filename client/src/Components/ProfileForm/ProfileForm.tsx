import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validateProductForm from './validation';
import { FormContainer, LabelContainer, Button, Error } from './styles';
import { useAuthStore } from '@/App/store/useAuthStore';
import { useNavigate } from 'react-router-dom';

// import dates from '../../../sneaker.json'
// import {useDispatch} from 'react-redux';

interface Props {
  name: string;
  userName: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  buyerAddress: string;
  email: string; 
  password: string; 
  dni: string
}

const EditProfileUser = ({ name, userName, firstName, lastName, contactNumber, buyerAddress, email, 
    password, dni}: Props) => {

      const navigate = useNavigate();

        const {setProfile} = useAuthStore();
        console.log('setProfile', setProfile)


  const [formSend, setFormSend] = useState(false);
  return (
    <div>
      <FormContainer>
        <div >
          <Formik initialValues={{
            name,
            userName, 
            firstName, 
            lastName, 
            contactNumber, 
            buyerAddress, 
            email, 
            password, 
            dni
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
                <h1 className='text-gray-900 font-bold text-xl mb-2'>Edit Your Profile</h1>

                <LabelContainer>


                  <div >
                    <label htmlFor='firstName' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>First Name</label>
                    <Field
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
                      type='string'
                      id=' firstName'
                      name=' firstName'
                      placeholder='First Name'
                    />
                    {/* <Error>
                      <ErrorMessage name='firstName' component={() => (
                        <div>{errors.firstName}</div>
                      )} />
                    </Error> */}
                  </div>

                  <div >
                    <label htmlFor='lastName' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Last Name</label>
                    <Field
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
                      type='string'
                      id='lastName'
                      name='lastName'
                      placeholder='Last Name'
                    />
                    <Error>
                      <ErrorMessage name='lastName' component={() => (
                        <div>{errors.lastName}</div>
                      )} />
                    </Error>
                  </div>
                  <div >
                    <label htmlFor='userName' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>User Name</label>
                    <Field
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
                      type='text'
                      id='userName'
                      name='userName'
                      placeholder='User Name'
                    />
                    <Error>
                      <ErrorMessage name='userName' component={() => (
                        <div>{errors.userName}</div>
                      )} />

                    </Error>
                  </div>
                  <div >
                    <label htmlFor='dni' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Identity Number</label>
                    <Field
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
                      type= 'dni'
                      id='dni'
                      name='dni'
                      placeholder='Identity Number'
                    />
                    <Error>
                      <ErrorMessage name='dni' component={() => (
                        <div>{errors.dni}</div>
                      )} />
                    </Error>
                  </div>



                  <div >
                    <label htmlFor='contactNumber' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Contact Number</label>
                    <Field
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
                      type='number'
                      id='contactNumber'
                      name='contactNumber'
                      placeholder='Contact Number'
                    />
                    <Error>
                      <ErrorMessage name='contactNumber' component={() => (
                        <div>{errors.contactNumber}</div>
                      )} />
                    </Error>
                  </div>

                  <div >
                    <label htmlFor='buyerAddress' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Address</label>
                    <Field
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
                      type='text'
                      id='buyerAddress'
                      name='buyerAddress'
                      placeholder='Adrress'
                    />
                    <Error>
                      <ErrorMessage name='buyerAddress' component={() => (
                        <div>{errors.buyerAddress}</div>
                      )} />
                    </Error>
                  </div>
                  <div >
                    <label htmlFor='email' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Email</label>
                    <Field
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
                      type= 'text'
                      id='email'
                      name='email'
                      placeholder='Email'
                    />
                    <Error>
                      <ErrorMessage name='email' component={() => (
                        <div>{errors.email}</div>
                      )} />
                    </Error>
                  </div>
                  <div >
                    <label htmlFor='password' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Password</label>
                    <Field
                      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
                      type= 'password'
                      id='password'
                      name='password'
                      placeholder='Password'
                    />
                    <Error>
                      <ErrorMessage name='password' component={() => (
                        <div>{errors.password}</div>
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


export default EditProfileUser;
