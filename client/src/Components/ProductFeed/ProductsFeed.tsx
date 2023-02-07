import React from "react";
import Card from "@/Components/Card/Cards";
import { useFetchAllSneaker } from '@/App/hooks/useSneakers';
import { useStore, SneakerStoreState} from '@/App/store/useSneakerStore';
import { CardsContainer } from "./styles";

const ProductsFeed = () => {
    const { sneakers, fetchSneakers } = useStore() as SneakerStoreState;

    return (
        <>
    <CardsContainer>
        {sneakers?.map(p=> (
            <Card key={p.id} product={p}/>  
        ))}
    </CardsContainer>


    
        </>
    )
};

export default ProductsFeed; 