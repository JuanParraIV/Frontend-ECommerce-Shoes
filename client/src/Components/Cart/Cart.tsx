import { ShoppingCartStore } from '@/App/store/useShoppingCart';
import { SneakersType } from '@/Typing/Sneakers.type';
import React from 'react'
import { formatCurrency } from '../../Utilities/formatCurrency';
import { Link } from 'react-router-dom';
import {CardStyle, Image, Card, Text, Continue, Delete, ProductDetail, ProductContainer, Buy} from './style'
import carritoVacio from '../../assets/icons-cart/carritovacio.png'


type ProductProps = {
  brand_name: string
  quantity: number;
  id: any
  details:string
  grid_picture_url: string
};




const Cart = ({brand_name,details, grid_picture_url, id}: ProductProps) => {

  

  const { products1, removeFromCart, total, cartQuantity, quantity} = ShoppingCartStore(state => state);
  console.log('product', products1)
  console.log('total', total )
  console.log('quantity', cartQuantity )
 

  const handleClick = (id) => {
    removeFromCart({
      remove:id,
    })   
}; 
  
  return (
 
    <>
   

        <div >
            <Continue>
              <Link to='/'>
               <button>Continue Shopping</button>
              </Link>
            </Continue>
      
      <ProductContainer>
      {products1.length < 1 && (
        <Text>
        <div > 
          <h3>Your shopping cart is Empty</h3>
          <img src={carritoVacio} alt='empty shopping cart' width='100px' height='100px' />
        </div>
        </Text>
      )}
     
      {
        products1.length > 0 &&
        products1.map((item,index) => (
          
          <div>
            <CardStyle>
            <img src={item.main_picture_url} width='350px' height='350px'/>
            <ProductDetail>

            <h5>Details:</h5>
            <p>{item.details}</p>
            <h5>Brand: </h5>
            <p>{item.brand_name}</p>
            <div>
              <h5>Size</h5> 
              <select> 

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
            <h5>Price</h5>
            <p>${item.price2}</p>
            <h5>Quantity:</h5>
            <p>{item.quantity}</p>
            <h5>Total Price:</h5>
            <p>${item.price}</p>
            </ProductDetail>

           <Delete>
            <button onClick={()=>handleClick(index)}>Delete</button> 
           </Delete>
      </CardStyle>

          </div>

        ))
      }
       
      <br />
       <hr />
       <hr />
        </ProductContainer>    
      <Text>
      <h5>Quantity: 
      <p> {quantity}</p>
      </h5>
      <h5>Total:</h5>
      <p> ${total}</p>
      </Text>

      {quantity>0 && 
      <div>
        <Buy>
          <button>Buy Now</button>
        </Buy>
        </div>}
        </div>
      
             
    </>
  )
};

export default Cart
