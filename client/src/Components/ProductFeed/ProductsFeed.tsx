import React from "react";
import Card from "@/Components/Card/Cards";
import { useFetchAllSneaker } from '@/App/hooks/useSneakers';
import { useSneakerStore, SneakerStoreState } from '@/App/store/useSneakerStore';
import { CardsContainer } from "./styles";
import { FavoriteSneakerStore } from '@/App/store/useFavoriteSneakerStore';
import Paginated from "../Paginated/Paginated";
import { useEffect, useState } from 'react';

const ProductsFeed = () => {
  const { sneakers, fetchSneakers } = useSneakerStore(state => state);
  const { favoriteSneakerIds } = FavoriteSneakerStore();

  const totalProducts = sneakers.length;

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const indexOfFirst = productsPerPage * currentPage - productsPerPage;
  const indexOfLast = productsPerPage * currentPage - 1;
  const currentElements =
    sneakers && sneakers.slice(indexOfFirst, indexOfLast + 1);

  const paginated = (number: number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    fetchSneakers();
  }, []);

  return (
    <div className=" flex flex-col justify-between">
      <CardsContainer>
        {currentElements?.map(p => (
          <Card key={p.id} product={p}
            isFavorite={favoriteSneakerIds.includes(p.id)} />
        ))}
      </CardsContainer>
      <Paginated
        data={sneakers}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        itemsPerPage={productsPerPage}
        totalItemsLength={totalProducts}
        indexOfFirst={indexOfFirst}
        indexOfLast={indexOfLast}
        paginated={paginated}
      />
    </div>
  );
};

export default ProductsFeed;
