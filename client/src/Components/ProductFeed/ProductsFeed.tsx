import React from "react";
import Card from '../Card/Cards';
import { useFetchAllSneaker } from '@/App/hooks/useSneakers';
import { useSneakerStore, SneakerStoreState } from '@/App/store/useSneakerStore';
import { CardsContainer } from "./styles";
import { FavoriteSneakerStore } from '@/App/store/useFavoriteSneakerStore';
import Paginated from "../Paginated/Paginated";
import { useEffect, useState } from 'react';
import Filters from "../Filters/Filters";
import { useFilterSneakerStore } from "@/App/store/useSneakerFilterStore";
import { CategorySneakerStore } from "@/App/store/useCategoryStore";
import { BrandSneakerStore } from "@/App/store/useBrandStore";

const ProductsFeed = () => {
  const { Filtered, fetchAll } = useFilterSneakerStore(state => state);
  const { fetchCategories } = CategorySneakerStore();
  const { fetchBrands } = BrandSneakerStore();


  const { favoriteSneakerIds } = FavoriteSneakerStore();

  const totalProducts = Filtered.length;

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const indexOfFirst = productsPerPage * currentPage - productsPerPage;
  const indexOfLast = productsPerPage * currentPage - 1;
  const currentElements =
    Filtered && Filtered.slice(indexOfFirst, indexOfLast + 1);

  const paginated = (number: number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    fetchAll();
    fetchCategories();
    fetchBrands();
  }, []);

  return (
    <div className=" flex flex-col justify-between">
      <Filters />
      <CardsContainer>
        {currentElements?.map(p => (
          <Card key={p.id} product={p}
            isFavorite={favoriteSneakerIds.includes(p.id)} />
        ))}
      </CardsContainer>
      <Paginated
        data={Filtered}
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
