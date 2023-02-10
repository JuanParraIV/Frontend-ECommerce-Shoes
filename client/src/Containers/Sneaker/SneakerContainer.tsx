import { useSneakerStore } from '@/App/store/useSneakerStore';
import { Details } from '@/Components/Details/Detail';
import Footer from '@/Components/Footer/Footer';
import MayLikeProducts from '@/Components/MayLikeProducts/MayLikeProducts';
import Navbar from '@/Components/Navbar/Navbar';
import { SneakersType } from '@/Typing/Sneakers.type';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SneakerContainer = () => {
  const { id } = useParams<Record<string, string>>();
  const { fetchingSingleSneaker, clearSingleSneaker } = useSneakerStore(state => state);

  useEffect(() => {
    clearSingleSneaker();
    fetchingSingleSneaker(Number(id));
  }, [id]);
  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl mx-auto">
        <Details />
      </main>
      <Footer />
    </>
  );
};

export default SneakerContainer;
