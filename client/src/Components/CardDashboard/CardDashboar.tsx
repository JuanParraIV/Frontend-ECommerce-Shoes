import React from 'react'
import {RiSearchLine, RiFilter3Line} from "react-icons/ri";
import { Link } from 'react-router-dom';
import { SneakersType } from '@/Typing/Sneakers.type';


type ProductProps = {
    name: string
    grid_picture_url: string
    retail_price_cents: number,
    stock: number,
    brand_name: string
  };


const CardDashboar = ({name, grid_picture_url, retail_price_cents, stock, brand_name}: ProductProps) => {
  return (
    <div>
        
            {/* cards */}
         <div className='bg-white rounded-3xl p-8 flex flex-col md:flex-row gap-8 w-full shadow-lg border-2 
            border-transparent hover:border-orange-300 transition-all mb-4'>
                <div className='w-full md:w-[10%] flex items-center justify-center'>
                    <div className='text-xl bg-orange-100 p-4'>
                    <img src={grid_picture_url} alt='imagen product or user'/>
                    </div>
                </div>
                <div className='w-full md:w-[70%]'>
                    <h1 className='text-2xl flex items-center gap-4 mb-4'>Product Name{name}
                    <Link to='/dashBoard'>
                    <button className='text-xl py-1 px-2 bg-green-100 text-green-600 font-bold'>Edit</button>
                    </Link>
                    <button className='text-xl py-1 px-2 bg-red-100 text-red-600 font-bold'>Delete</button>
                    </h1>
                    <p className='text-gray-500 text-xl'>Brand{brand_name}</p>
                </div>
                        <div className='w-full md:w-[20%] flex flex-col items-end'>
                            <h3 className='text-3xl text-gray-500 font-medium mb-2'>Stock:{stock}</h3>
                            <p className=' text-xl text-gray-500 font-medium'>Price:{retail_price_cents} </p>
                        </div>
            </div>
    </div>
  )
}

export default CardDashboar
