import Cart from '../../Components/Cart/Cart';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';



type Props = {};

const CartContainer = (props: Props) => {
  return (
    <>
      <Navbar />
      <Cart />
      <Footer />

    </>
  );
};

export default CartContainer;
