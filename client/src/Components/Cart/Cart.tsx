import { Link, useNavigate } from 'react-router-dom';
import { CardStyle, Image, Card, Text, Continue, Delete, ProductDetail, ProductContainer, Buy } from './style';
import carritoVacio from '../../assets/icons-cart/carritovacio.png';
import { CartStore } from '@/App/store/useCartStore';
import { SneakersType } from '@/Typing/Sneakers.type';
import { useAuthStore } from '@/App/store/useAuthStore';
import { useGoogleAuthStore } from '@/App/store/useAuthGoogleStore';
import api from '@/Api/backend_sneakers';





const Cart = () => {
  const { token, profile, isAuthenticated } = useAuthStore(state => state);
  const { tokenGoogle, profileGoogle, isGoogleAuthenticated } = useGoogleAuthStore(state => state);
  const navigate = useNavigate();
  const { removeFromCart, cartItems, totalPrice, totalQty } = CartStore(state => state);
  console.log(cartItems);

  const handleRemoveFromCart = async (product: SneakersType) => {
    removeFromCart(product);
    try {
      const userType = isAuthenticated ? 'user' : isGoogleAuthenticated ? 'googleUser' : undefined;
      const trolleyData = {
        id: product.id,
        token: {
          token: isAuthenticated ? token : isGoogleAuthenticated ? tokenGoogle : undefined, userType
        },
      };
      const response = await api.delete('/trolley', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${isAuthenticated ? token : isGoogleAuthenticated ? tokenGoogle : undefined}`,
        },
        data: trolleyData,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  function handleCheckout(): void {
    navigate('/checkout');
  }

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
                      <select id="size" >
                        <option value="">Select a Size</option>
                        {item.size_range && item.size_range.map(size => (
                          <option key={size} value={size}>{size}</option>
                        ))}
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
                    <button onClick={() => handleRemoveFromCart(item)}>Delete</button>
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
            <Buy onClick={handleCheckout}>
              <button>Buy Now</button>
            </Buy>
          </div>}
      </div>


    </>
  );
};

export default Cart;
