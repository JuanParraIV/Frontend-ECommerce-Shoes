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
 
  // const obj= { 
  //   quantity,
  //   price:retail_price_cents*quantity,
  //   price2: retail_price_cents

  // }

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
              <select >

                {item.size_range.map(
                  size=> (
                    <option >Size: {size}</option>
                  )
                )}
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
