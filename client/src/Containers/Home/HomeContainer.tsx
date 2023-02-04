import ContenedorHome from '../../Components/Home/style';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux'
import dates from '../../../sneaker.json'
import Product from '../../Components/Product/Product';
import MayLikeProducts from '../../Components/MayLikeProducts/MayLikeProducts';

type Props = {}

const HomeContainer = (props: Props) => {

  const Products = useSelector((state) => state.counter);

  return (

    <ContenedorHome>
      <Navbar />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />


    {/* PRUEBA PARA MOSTRAR LOS PRODUCTOS */}
    <MayLikeProducts props={dates.sneakers} />
   
     </main>

    <Footer />
    </ContenedorHome>
  );
};

export default HomeContainer;
