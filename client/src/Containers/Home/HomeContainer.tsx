import ContenedorHome from '../../Components/Home/style';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import { useDispatch, useSelector } from 'react-redux'
import dates from '../../../sneaker.json'
import Product from '../../Components/Product/Product';

type Props = {}

const HomeContainer = (props: Props) => {

  const Products = useSelector((state) => state.counter);
  console.log(Products);

  return (

    <ContenedorHome>
      <Navbar />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />


    {/* PRUEBA PARA MOSTRAR LOS PRODUCTOS */}

    {
        dates.sneakers?.map(info => {
          return (
            <Product
            brand_name={info.brand_name}
            color={info.color}
            gender={info.gender}
            grid_picture_url={info.grid_picture_url}
            retail_price_cents={info.retail_price_cents}
            />
          )
        })
    }
     </main>
    </ContenedorHome>
  );
};

export default HomeContainer;
