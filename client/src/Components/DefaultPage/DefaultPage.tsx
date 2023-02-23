import React from 'react';
import notFound from '../../assets/404.jpg'

const DefaultPage = () => {
  return (
    <div className='mt-8 w-9/12 rounded-2xl max-w-xl'>
      <h5 className='w-10/12 m-auto my-4 font-bold'>Error 404 Page Not Found</h5>
      <img src={notFound} alt='404_image' className='w-9/12 m-auto my-4 rounded-2xl' />
    </div>
  );
};

export default DefaultPage;
