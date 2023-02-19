import { useSneakerStore } from '@/App/store/useSneakerStore';
import ModificateProduct from '@/Components/FormModificateProduct/ModificateProduct';

import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SneakersAdminContainer = () => {

    const { id } = useParams<Record<string, string>>();
    const { fetchingSingleSneaker, clearSingleSneaker } = useSneakerStore(state => state);
  
    useEffect(() => {
      clearSingleSneaker();
      fetchingSingleSneaker(Number(id));
    }, [id]);

  return (
    <div>
      <ModificateProduct />
    </div>
  )
}

export default SneakersAdminContainer
