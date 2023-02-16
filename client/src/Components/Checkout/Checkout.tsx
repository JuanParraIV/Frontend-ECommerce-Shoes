// import React, { useState } from 'react'
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import swal from 'sweetalert';
// import api from '@/Api/backend_sneakers';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Card } from '../Cart/style';
// import { ShoppingCartStore } from '@/App/store/useShoppingCart';
// import { useAuthStore } from '@/App/store/useAuthStore';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';

// const stripePromise = loadStripe('pk_test_51MbTIzJhcFAZvo867sTSmXA8sbtVQj5xILw6joZiLAfNvTYKgKlqP4VeNLUiy5H0QMF5KSGdhWjhzBfTEvZe4uZp00XxU2qf34')

// interface formData {
//   id: string,
//   line_items: string
//   amount: string
//   token: string
//   userInfo: string
// }

// const App = () =>{

//   const stripe = useStripe(); 
//   const elements = useElements(); 
//   const navigate = useNavigate();
//   const { total, products1} = ShoppingCartStore(state => state);
//   const {profile,  token} = useAuthStore();
  
//   const [loading, setLoading] = useState(false);
  
  
//   const [profil, setProfile] = useState({
//     name: profile.firstName,
//     lasName: profile.lastName,
//     userName: profile.userName,
//     identity: profile.dni,
//     email: profile.email,
//     Contact: profile.contactNumber,
//     Address: profile.buyerAddress
//   })

//   const handleSubmit = async (e: { preventDefault: any; }) => {
  
//     e.preventDefault();
//     setLoading(true)
    
//     const {error, paymentMethod} = await stripe?.createPaymentMethod({
//       type: 'card',
//       card: elements?.getElement(CardElement)
//     }); 
    
    
//     if(!error) {
//       console.log(paymentMethod)
      
//       try {
//       const {id} = paymentMethod
//       const {data} = await api.post('/payment', {
//         id, 
//         amount: total,
//         token,
//         profil,
//         products1
//       },{
//         headers:{
//           'Content-Type': 'application/json',
//         }   
//       } );
//       console.log(data)
//       //creando la orden en el b

//       swal({
//         title: "Payment successful",
//         text: "Thanks your for your Purchase!",
//         icon: "success",
        
//       });
//       setLoading(false)
//       navigate('/')
//     }
//     catch (error) {
//    console.log(error)
//   }
   
//   }
//   elements?.getElement(CardElement)?.clear()
//   };


//     return (
//       <div>

//         <Navbar/>
        


        
//       <div className='flex justify-center rounded-2xl gap-10 m-10 mt-[60px] p-10 md:flex-wrap md:m-5 '>
//         <div className='flex justify-center rounded-2xl gap-10 m-10 mt-[60px] p-10 md:flex-wrap md:m-5 '>
//           <div className='block rounded-lg shadow-lg  bg-yellow-100 max-w-sm text-center w-full'>
//             <div className="py-3 px-5 border-b border-white">
//              Your Information
//             </div>
//             <p className="text-gray-700 text-base mb-4">Name: {profile.firstName} {profile.lastName} </p>
//             <p className="text-gray-700 text-base mb-4">UserName: {profile.userName}</p>
//             <p className="text-gray-700 text-base mb-4">Identity Number: {profile.dni}</p>
//             <p className="text-gray-700 text-base mb-4">Email: {profile.email}</p>
//             <p className="text-gray-700 text-base mb-4">Contact Number: {profile.contactNumber}</p>
//             <p className="text-gray-700 text-base mb-4">Address: {profile.buyerAddress}</p> 
//           <button className=" inline-block my-3 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:red-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg--800 active:shadow-lg transition duration-150 ease-in-out">Edit</button>
//           </div>

//         <form onSubmit={handleSubmit} className='block rounded-lg shadow-lg  bg-slate-300 max-w-sm text-center w-full'>
//           <div className="py-3 px-5 border-b border-white" >
//             Payment Form 
//           </div>
//           <div>
           
            
//             <h5 className="text-gray-900 text-xl font-medium mb-2">Your Products</h5>
           
//           {
            
//             products1.length>0 &&
//             products1.map((item)=> (
//               <div className="p-10 w-150" >
//                 <p className="text-gray-900 text-xl mb-4 ">{item.brand_name}</p>
//                 <img src={item.main_picture_url} width='100px' height='100px' />
//                 <p className="text-gray-700 text-base mb-4">Qty: {item.quantity}</p>
//                 <p className="text-gray-700 text-base mb-4">Price Unit: ${item.price2}</p>
//                 <p className="text-red-700 text-base mb-4">Price Total: ${item.price}</p>
//               </div>
//             ))
//           }
//           </div>
          
//           <h1 className='py-3 px-6 border-t border-white text-gray-600'>Total: {total}</h1>
//           <h1 className='py-3 px-6 border-t border-white text-gray-600'>Forma de Pago</h1>
         
//           <CardElement/>
      
//           <button disabled={!stripe} className=" inline-block px-6 py-2.5 my-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
//             {
//               loading? (
//                 <div className='flex justify-center items-center'>
//                  <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full">
//                    <span className="visually-hidden"></span>
//                  </div>
//                  </div>
//               ):
              
//               "Buy"
//             }
//           </button>
//         </form>
//       </div>
//         </div>
// <Footer/>
// </div>

      
//     )
// }



// function CheckoutForm() {
//   return (
    
//       <Elements stripe={stripePromise}>
//         <App/>
//       </Elements>
//   )
// }

// export default CheckoutForm; 
