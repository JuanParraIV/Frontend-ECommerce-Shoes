import React from 'react';
import FormCreateProduct from '../../Components/FormCreateProduct/FormCreateProduct';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';

type Props = {};

const FormContainer = (props: Props) => {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl mx-auto">
        <FormCreateProduct name={""} price={0} image={""} stock={0} brand={""} description={""} status={""} />
      </main>
      <Footer />
    </>
  );
};

export default FormContainer;
