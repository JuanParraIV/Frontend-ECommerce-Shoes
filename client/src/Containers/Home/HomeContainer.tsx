import React from 'react';
import ContenedorHome from '../../Components/Home/style';
import Home from '../../Components/Home/Home';
import Banner from '../../Components/Banner/Banner';
type Props = {};

const HomeContainer = (props: Props) => {
  return (

    <ContenedorHome>
      {/* NavBar */}
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
      </main>
    </ContenedorHome>
  );
};

export default HomeContainer;
