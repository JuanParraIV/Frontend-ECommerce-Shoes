import ContenedorHome from '../../Components/Home/style';
import Home from '../../Components/Home/Home';
import Navbar from '../../Components/Navbar/Navbar';

type Props = {}

const HomeContainer = (props: Props) => {
  return (

    <ContenedorHome>

      <Navbar />
      
      <Home
        name='Mario'
        apellido='Parra'
        edad={29}
      />
    </ContenedorHome>
  )
}

export default HomeContainer
