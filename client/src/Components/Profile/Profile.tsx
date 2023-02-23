import { useAuthStore } from '@/App/store/useAuthStore';
import produce from 'immer';
import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import logo from '../../assets/icons-navbar/Logo.png';
import { Link } from 'react-router-dom';
import { useGoogleAuthStore } from '@/App/store/useAuthGoogleStore';

function Profile() {

  const { profile } = useAuthStore();
  const { profileGoogle } = useGoogleAuthStore();
  console.log('profile', profile);
  console.log('profile', profileGoogle);

  return (
    <>
      <Navbar />
      {profile ? (
        <main className="profile-page">
        <section className="relative py-16 bg-blueGray-200">
          <h1 className='flex justify-center font-bold text-5xl text-yellow-200 underline decoration-orange-200'>Your Profile</h1>
          <div className="container mx-auto px-5">
            <div className="relative  min-w-0 break-words bg-gray-100 w-85 mb-6 shadow-xl rounded-lg -mt-58">
              <div className="px-6">
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                    Name: {profile.firstName} {profile.lastName}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    UserName: {profile.userName}
                  </div>

                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Identity Document Number:{profile.dni}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Address:{profile.buyerAddress}
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>Email: {profile.email}
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>Number: {profile.contactNumber}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <Link to='/editprofile'>
                      <button className="font-normal text-pink-500">Edit Profile</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <img
                    src={logo}
                    alt="Jm-zon"
                    className="cursor-pointer w-[150px] h-[40px] object-contain"
                  />
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Sneakers Society
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
      ) : null}
      {profileGoogle ?  (
        <main className="profile-page">
        <section className="relative py-16 bg-blueGray-200">
          <h1 className='flex justify-center font-bold text-5xl text-yellow-200 underline decoration-orange-200'>Your Profile</h1>
          <div className="container mx-auto px-5">
            <div className="relative  min-w-0 break-words bg-gray-100 w-85 mb-6 shadow-xl rounded-lg -mt-58">
              <div className="px-6">
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                    Name: {profileGoogle.given_name} {profileGoogle.family_name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    nickname: {profileGoogle.nickname}
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>Email: {profileGoogle.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <img
                    src={logo}
                    alt="Jm-zon"
                    className="cursor-pointer w-[150px] h-[40px] object-contain"
                  />
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Sneakers Society
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
      ) : null}
      <Footer />
    </>
  );
}

export default Profile;
