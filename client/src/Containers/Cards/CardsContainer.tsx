import React from "react";
import Card from "@/Components/Card/Cards";
import { useFetchAllSneaker } from '@/App/hooks/useSneakers';
import { useStore, StoreState} from '@/App/store/useSneakerStore';
import { CardsContainer } from "./styles";

const CardsProducts = () => {
    const { sneakers, fetchSneakers } = useStore() as StoreState;

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

export default CardsProducts; 