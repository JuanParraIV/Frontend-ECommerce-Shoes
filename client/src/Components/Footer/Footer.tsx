import icons from '../../assets/icons-footer/icons-footer';
import { useNavigate } from 'react-router-dom';
import NewsLetter from '../Newsletter/Newsletter';

export default function Footer() {
  const navigate = useNavigate();
        return (
          <footer className=" bg-gray-200 text-gray-100 mt-full">

              <div className="container grid mx-24 gap-y-8 md:grid-cols-4 xl:grid-cols-5">

                  <div className="flex flex-col mr-20 space-y-4">
                      <a rel="noopener noreferrer" href="#" className="flex justify-center md:justify-start">
                          <div className="flex items-center justify-center w-23 h-23 rounded-full ">
                              <img src={icons.Logo} />
                          </div>
                      </a>
                  </div>

                  <div className="pt-6 flex flex-col space-y-4">
                      <h2 className="text-yellow-600 font-bold">INSTITUTIONAL</h2>
                      <div className="flex flex-col space-y-2 text-md text-gray-600">
                        <a onClick={()=>navigate('/aboutUs')}>About us</a>
                        <a rel="noopener noreferrer" href="#">Developers</a>
                        <a rel="noopener noreferrer" href="#">Terms and Conditions</a>
                    </div>
                </div>

                  <div className="pt-6 flex flex-col space-y-4">
                  <h2 className="text-yellow-600 font-bold">PRODUCTS</h2>
                  <div className="flex flex-col space-y-2 text-md text-gray-600">
                      <a rel="noopener noreferrer" href="#">Air Jordan</a>
                      <a rel="noopener noreferrer" href="#">Nike</a>
                      <a rel="noopener noreferrer" href="#">Adidas</a>



                  </div>
              </div>

              <div className="pt-6 flex flex-col space-y-4">
                  <h2 className="text-yellow-600 font-bold">CONTACT</h2>
                  <div className="flex flex-col space-y-2 text-md text-gray-600">
                      <div className="flex flex-row w-7 h-7 gap-2">
                          <img src={icons.WhatsApp} alt="WhatsApp" />
                          <img src={icons.Instagram} alt="Instagram" />
                          <img src={icons.Facebook} alt="Facebook" />
                          <img src={icons.Linkedin} alt="Linkedin" />
                          <img src={icons.Email} alt="Gmail" />
                      </div>
                  </div>
              </div>
              <div className="pt-6 flex flex-col space-y-4">
              <h2 className="text-yellow-600 font-bold">Subscribe for our Newsletter</h2>
                  <NewsLetter/>
              </div>


          </div>
          <div className="flex items-center justify-center px-6 pt-2 pb-4 text-sm">
              <span className="text-gray-400">© Copyright 2023. Todos los Derechos Reservados.</span>
          </div>
      </footer>
        )
}

