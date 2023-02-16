import { ShoppingCartStore } from '@/App/store/useShoppingCart';
import { Link } from 'react-router-dom';
import { CardStyle, Image, Card, Text, Continue, Delete, ProductDetail, ProductContainer, Buy } from './style';
import carritoVacio from '../../assets/icons-cart/carritovacio.png';
import { CartStore } from '@/App/store/useCartStore';
import { SneakersType } from '@/Typing/Sneakers.type';





const Cart = () => {

  const { removeFromCart, cartItems, totalPrice, totalQty} = CartStore(state => state);
  console.log(cartItems);

  const handleClick = (product: SneakersType) => {

    removeFromCart(product);
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
          {cartItems.length < 1 && (
            <Text>
              <div >
                <h3>Your shopping cart is Empty</h3>
                <img src={carritoVacio} alt='empty shopping cart' width='100px' height='100px' />
              </div>
            </Text>
          )}

          {
            cartItems.length > 0 &&
            cartItems.map((item, index) => (

              <div>
                <CardStyle>
                  <img src={item.main_picture_url} width='350px' height='350px' />
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
                    <p>${item.retail_price_cents}</p>
                    <h5>Quantity:</h5>
                    <p>{item.quantity}</p>
                    <h5>Total Price:</h5>
                    <p>${item.retail_price_cents * item.quantity}</p>
                  </ProductDetail>

                  <Delete>
                    <button onClick={() => handleClick(item)}>Delete</button>
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
            <p> {totalQty}</p>
          </h5>
          <h5>Total:</h5>
          <p> ${totalPrice}</p>
        </Text>

        {totalQty > 0 &&
          <div>
            <Buy>
              <button>Buy Now</button>
            </Buy>
          </div>}
      </div>


    </>
  );
};

export default Cart;
