import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import MayLikeProducts from '../../Components/MayLikeProducts/MayLikeProducts';
import ProductsFeed from '../../Components/ProductFeed/ProductsFeed';
import { fetchAllSneaker } from '@/App/hooks/useSneakers';
import { useSneakerStore } from '@/App/store/useSneakerStore';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useGoogleAuthStore } from '@/App/store/useAuthGoogleStore';



const HomeContainer = () => {
  const {user, isAuthenticated} = useAuth0();
  const {setProfile,postUserGoogle, authLogin} = useGoogleAuthStore(state => state);

  console.log(user)
  const fetchSneakers = useSneakerStore(state => state.fetchSneakers);
  useEffect(() => {
    if (user && typeof user.email_verified === 'boolean') { // Verificar si user tiene un valor
      setProfile(user);
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (user) { // Verificar si user tiene un valor
      postUserGoogle();
      authLogin();
    }

  }, [user])

  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductsFeed />
        <MayLikeProducts />
      </main>
      <Footer />
    </>
  );
};

export default HomeContainer;
