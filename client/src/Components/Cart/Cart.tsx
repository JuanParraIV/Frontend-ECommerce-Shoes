import { ShoppingCartStore } from '@/App/store/useShoppingCart';
import { SneakersType } from '@/Typing/Sneakers.type';
import React from 'react'
import { Details } from '../Details/Detail';
import { formatCurrency } from '../../Utilities/formatCurrency';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


type ProductProps = {
  brand_name: string
  quantity: number;
  id: any
  details:string
  grid_picture_url: string
};




const Cart = ({brand_name, quantity,details, grid_picture_url, id}: ProductProps) => {

  

  const { products1, removeFromCart, total, cartQuantity} = ShoppingCartStore(state => state);
  console.log('product', products1)
  console.log('total', total )
  console.log('quantity', cartQuantity )
 

  const handleClick = (id) => {
    removeFromCart({
      remove:id,
    })   
}; 
  
  return (
 
    

    <div className=" flex flex-col justify-between">
      <Navbar/>
              <Link to='/'>
               <button>Continue Shopping</button>
              </Link>
      {products1.length < 1 && (
        <div>
          <h3>Your shopping cart is Empty</h3>
        </div>
      )}
     
      {
        products1.length > 0 &&
        products1.map((item,index) => (

          <div>
            <img src={item.main_picture_url} width='350px' height='350px'/>
            <h1>Details: {item.details}</h1>
            <h1>Brand: {item.brand_name}</h1>
            <div>
              <select> 
              <option>Size</option> 
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

            </div>
            <h5>Price: {item.price2}</h5>
            <h5>Quiantity: {item.quantity}</h5>
            <h5>Total Price: {item.price}</h5>
           
            <button onClick={()=>handleClick(index)}>Delete</button> 
          </div>
        ))
      }
      <br />
<hr />
<hr />
      <h1>Quantity:</h1>
      <h1>Total: ${total}</h1>
             
     
    </div>
  )
};

export default Cart
