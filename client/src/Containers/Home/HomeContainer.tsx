import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import MayLikeProducts from '../../Components/MayLikeProducts/MayLikeProducts';
import ProductsFeed from '../../Components/ProductFeed/ProductsFeed';
import { fetchAllSneaker } from '@/App/hooks/useSneakers';
import { useSneakerStore } from '@/App/store/useSneakerStore';



const HomeContainer = () => {
  const fetchSneakers = useSneakerStore(state => state.fetchSneakers);
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
