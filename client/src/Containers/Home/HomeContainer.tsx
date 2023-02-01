import React from 'react'
import ContenedorHome from '../../Components/Home/style';
import Home from '../../Components/Home/Home';
type Props = {}

const HomeContainer = (props: Props) => {
  return (

    <ContenedorHome>
      {/* NavBar */}
      <Home
        name='Mario'
        apellido='Parra'
        edad={29}
      />
    </ContenedorHome>
  )
}

export default HomeContainer
