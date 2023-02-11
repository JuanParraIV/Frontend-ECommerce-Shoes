import Cart from '../../Components/Cart/Cart';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';



type Props  = {};

const CartContainer = (props:Props) => {
    return (
        <>
        <Navbar/>
        <Cart brand_name={''} quantity={0} id={undefined} details={''} grid_picture_url={''} />
        <Footer/>

        </>
    )
};

export default CartContainer; 