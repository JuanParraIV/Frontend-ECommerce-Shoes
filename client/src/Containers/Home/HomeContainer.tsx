import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../Components/Product/Product';
import MayLikeProducts from '../../Components/MayLikeProducts/MayLikeProducts';
import ProductsFeed from '../../Components/ProductFeed/ProductsFeed'

const HomeContainer = () => {

  /*   const Products = useSelector((state) => state.counter); */

  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductsFeed/>
        {/* PRUEBA PARA MOSTRAR LOS PRODUCTOS */}
        <MayLikeProducts/>
      </main>
      <Footer />
    </>
  );
};

export default HomeContainer;
