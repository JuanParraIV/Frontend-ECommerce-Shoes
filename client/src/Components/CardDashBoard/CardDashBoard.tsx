import React from 'react'
import {RiSearchLine, RiFilter3Line} from "react-icons/ri";
import { Link } from 'react-router-dom';
import { SneakersType } from '@/Typing/Sneakers.type';
import { useSneakerStore } from '@/App/store/useSneakerStore';
import api from '@/Api/backend_sneakers';
import { useAuthStore } from '@/App/store/useAuthStore';
import swal from 'sweetalert';



type ProductProps = {
    product: SneakersType;
  };


const CardDashboar = ({product}: ProductProps) => {
  const {token}= useAuthStore(state=> state)
const {deleteProduct} = useSneakerStore();

const handleDelete = async (id: number) => {
  await api.delete(`/sneakers/${id}`,
   {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
  deleteProduct(id);
  try {
    swal({
      title: "Excellent",
      text: "Product deleted successfuly!",
      icon: "success",
      buttons: {
        confirm: {
          text: "Ok",
          value: true,
          visible: true,
          className: "rounded-3xl bg-yellow-400 text-black text-center w-full px-5 py-2 my-8",
          closeModal: true,
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};
  
  return (
    <div>
        
            {/* cards */}
         <div className='bg-white rounded-3xl p-8 flex flex-col md:flex-row gap-8 w-full shadow-lg border-2 
            border-transparent hover:border-orange-300 transition-all mb-4'>
                <div className='w-full md:w-[10%] flex items-center justify-center'>
                    <div className='text-xl bg-orange-100 p-4'>
                    <img src={product.grid_picture_url} alt='imagen product or user'/>
                    </div>
                </div>
                <div className='w-full md:w-[70%]'>
                    <h1 className='text-2xl flex items-center gap-4 mb-4'>{product.name}
                    <Link to={`/modifproduct/${product.id}`}>
                    <button className='text-xl py-1 px-2 bg-green-100 text-green-600 font-bold'>Edit</button>
                    </Link>
                    <button className='text-xl py-1 px-2 bg-red-100 text-red-600 font-bold'
                    onClick={()=>handleDelete(product.id)}>Delete</button>
                    </h1>
                    <p className='text-gray-500 text-xl'>{product.brand_name}</p>
                </div>
                        <div className='w-full md:w-[20%] flex flex-col items-end'>
                            <h3 className='text-3xl text-gray-500 font-medium mb-2'>Stock:{product.stock}</h3>
                            <p className=' text-xl text-gray-500 font-medium'>Price:{product.retail_price_cents} </p>
                        </div>
            </div>
    </div>
  )
}

export default CardDashboar