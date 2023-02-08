import React from "react";
import Card from "@/Components/Card/Cards";
import { useFetchAllSneaker } from '@/App/hooks/useSneakers';
import { useStore, SneakerStoreState} from '@/App/store/useSneakerStore';
import { CardsContainer } from "./styles";
import {FavoriteSneakerStore} from '@/App/store/useFavoriteSneakerStore';

const ProductsFeed = () => {
    const { sneakers, fetchSneakers } = useStore() as SneakerStoreState;

    const {favoriteSneakerIds} = FavoriteSneakerStore()

    return (
        <>
    <CardsContainer>
        {sneakers?.map(p=> (
            <Card key={p.id} product={p}
             isFavorite={favoriteSneakerIds.includes(p.id)}/>  

        ))}
    </CardsContainer>


    
        </>
    )
};

export default ProductsFeed; 