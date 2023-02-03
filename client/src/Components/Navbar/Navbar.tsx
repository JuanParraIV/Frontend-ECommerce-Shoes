import images from "../../assets/images.js"

export default function Navbar() {
  return (
    <header className="flex bg-gray-100 ">
         <div className="flex w-full justify-between  h-14 mt-2 mb-2 mx-5">
          
         <div className="bg-gray-3">
          <img src={images.logo} className="w-15 h-14" alt="" />
          </div>

          <div>SEARCHBAR</div>
          
          <div className="items-center flex-shrink-0 hidden lg:flex space-x-3">
			      <button className="self-center px-8 py-3 font-semibold rounded bg-yellow-400 text-gray-900">Sign in</button>
			      <button className="self-center px-8 py-3 font-semibold rounded bg-yellow-400 text-gray-900">Sign up</button>
		      </div>

         </div>
    </header>
  )
}
