import { useSneakerStore } from '@/App/store/useSneakerStore';
import { Details } from '@/Components/Details/Detail';
import Footer from '@/Components/Footer/Footer';
import MayLikeProducts from '@/Components/MayLikeProducts/MayLikeProducts';
import Navbar from '@/Components/Navbar/Navbar';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';



const SneakerContainer = () => {
  const {id} = useParams<Record<string, string>>();;
  const { fetchingSingleSneaker, clearSingleSneaker } = useSneakerStore(state => state);

  const singleSneaker= useSneakerStore(state => state.singleSneaker);
  useEffect(() => {
    clearSingleSneaker();
    fetchingSingleSneaker(Number(id));
  }, [id]);
  return (
    <>
      <Navbar/>
      <main className="max-w-screen-2xl mx-auto">
        <Details singleSneaker={singleSneaker}/>
      </main>
      <Footer />
    </>
  );
};

export default SneakerContainer;
