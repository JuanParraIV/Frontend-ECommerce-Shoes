import { Link } from "react-router-dom";
import icons from '@/assets/icons-navbar/icons-navbar';


const Logo = () => {
  return (
    <Link to={'/'}>
      <div className="relative flex items-center h-10 cursor-pointer my-auto p-10 w-[250px]">
        <img src={icons.Logo} alt="" className='object-contain' />
      </div>
    </Link>
  );
};

export default Logo;
