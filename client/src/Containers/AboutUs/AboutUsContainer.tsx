import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import MayLikeProducts from '../../Components/MayLikeProducts/MayLikeProducts';
import ProductsFeed from '../../Components/ProductFeed/ProductsFeed';
import { useSneakerStore } from '@/App/store/useSneakerStore';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useGoogleAuthStore } from '@/App/store/useAuthGoogleStore';
import AboutUS from '@/Components/AboutUs/AboutUS';



const AboutUsContainer = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl mx-auto">
        <AboutUS/>
      </main>
      <Footer />
    </>
  );
};

export default AboutUsContainer;
