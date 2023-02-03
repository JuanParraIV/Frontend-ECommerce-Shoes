import ContenedorHome from '../../Components/Home/style';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import { useDispatch, useSelector } from 'react-redux'
import dates from '../../../sneaker.json'

type Props = {}

const HomeContainer = (props: Props) => {

  const Products = useSelector((state) => state.counter);
  console.log(Products);

  return (

    <ContenedorHome>

      <Navbar /> 
      <Banner/>

    {/* PRUEBA PARA MOSTRAR LOS PRODUCTOS */}

    {
        dates.sneakers?.map( info => {
          return (
            <div className='mt-10'>
              <h1>{info.brand_name}</h1>
              <h1>{info.brand_name}</h1>
              <h1>{info.color}</h1>
              <h1>{info.gender}</h1>
              <h1>${info.retail_price_cents}</h1>
              <img src={info.grid_picture_url} alt="" />
              <hr />
            </div>
          )
        })
    }

    </ContenedorHome>
  )
}

export default HomeContainer
