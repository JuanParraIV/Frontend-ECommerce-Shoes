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
		    <Form className='formulario' >
				<h1>Create Product</h1>


			<LabelContainer>
				
			 <div >
			  <label htmlFor='name'>Name</label>
			  
			  <Field 
			    className='input'
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
			  <label htmlFor='price'>Price</label>
			  <Field
			  className='input'
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
			  <label  htmlFor='stock'>Stock</label>
			  <Field
			  className='input'
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
                <label htmlFor='brand'>Brand</label>
				<Field className='input' name='brand' as='select'>
				<option>Brand</option>
				{dates.sneakers?.map((b)=> {
                                 return(
                                     <option 
                                     value={b.brand_name}>{b.brand_name}</option>
                                     )
                                 })}
					{/* <option value='Air Jordan'>Air Jordan</option>
					<option value='Champion'>Champion</option>
					<option value='Converse'>Converse</option>
                    <option value='Gucci'>Gucci</option>
                    <option value='Nike'>Nike</option>
                    <option value='Vans'>Vans</option>
                    <option value='adidas'>adidas</option> */}
				</Field>
				<Error>
                <ErrorMessage name='brand' component={()=> (
					<div className='error'>{errors.brand}</div>
				)}/>
				</Error>
			 </div>

			 <div> Status
				<hr/>
				<label>
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
				<label>
				<Field  className='input' name='description' as='textarea' placeholder='Description'/>
				</label>
				<Error>
                <ErrorMessage name='description' component={()=> (
					<div className='error'>{errors.description}</div>
				)}/>
				</Error>
			 </div>

             <div>
                <label htmlFor='image'>Image</label>
                <Field
				className='input'
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