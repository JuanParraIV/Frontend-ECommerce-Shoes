import React, {useState}from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Validate from './validation';
import {FormContainer, LabelContainer, Button, Error} from '../Form/style'
import dates from '../../../sneaker.json'
// import {useDispatch} from 'react-redux'; 



const FormCreateProduct = () => {

// const dispatch = useDispatch()
	

const  [formSend, setFormSend] =  useState(false);

	
	return (

	<FormContainer>

	
		<div >
		<Formik
		initialValues={{
			name:'', 
			brand: '',
			price: 0, 
            image: '', 
            description: '', 
            stock: 0, 
            status: ''
		}}

		
		
		onSubmit={(value, {resetForm})=> {
			resetForm();
			console.log(value);
			console.log('Formulario Enviado');
			setFormSend(true);
			setTimeout(()=> setFormSend(false), 5000)
			// dispatch(formCreate(value))
		}}

		validate={(value) => Validate(value)}>

			{({ errors})=> (
		    <Form  >
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
				<ErrorMessage name='name' component={()=> (
					<div className='error'>{errors.name}</div> 
				)}/>
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
			  <ErrorMessage name='price' component={()=> (
					<div className='error'>{errors.price}</div>
				)}/>	

			  </Error>
			 </div>

             <div >
			  <label  htmlFor='stock' className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>Stock</label>
			  <Field
			  className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
			  type='number' 
			  id='stock'
			  name='stock' 
			  placeholder='stock' 
			  />
			  <Error>
              <ErrorMessage name='stock' component={()=> (
					<div className='error'>{errors.stock}</div>
				)}/>	

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
                <ErrorMessage name='brand' component={()=> (
					<div className='error'>{errors.brand}</div>
				)}/>
				</Error>
			 </div>

			 <div className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'> Status
				<hr/>
				<label >
					<Field type='radio' name='status' value='New'/>New
				</label>
				<label>
					<Field type='radio' name='status' value='Used'/>Used
				</label>
				<Error>
                <ErrorMessage name='status' component={()=> (
					<div className='error'>{errors.status}</div>
				)}/>
				</Error>
			 </div>
			 <div >
				Description
				<hr/>
				<label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'>
				<Field  className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe' name='description' as='textarea' placeholder='Description'/>
				</label>
				<Error>
                <ErrorMessage name='description' component={()=> (
					<div className='error'>{errors.description}</div>
				)}/>
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
                 <ErrorMessage name='image' component={()=> (
					<div className='error'>{errors.image}</div>
				)}/>	
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
	);
}


export default FormCreateProduct;