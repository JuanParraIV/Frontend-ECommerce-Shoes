import Navbar from '../../Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';
import EditProfileUser from '../../Components/ProfileForm/ProfileForm'

type Props = {};

import React from 'react'

const FormEditProfileContainer = () => {
  return (
    <div>
      <Navbar/>
      <main className="max-w-screen-2xl mx-auto">
        <EditProfileUser />
      </main>
      <Footer/>
    </div>
  )
}

export default FormEditProfileContainer
