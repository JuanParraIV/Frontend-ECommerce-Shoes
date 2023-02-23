

import Button from './Button';
import { FcGoogle } from 'react-icons/fc';

const LoginAuth0Button = ({ isLoading = false, text = 'Submit', ...rest }) => {

  return (
    <Button type="submit" icon={isLoading ? 'spinner' : ''} className=' flex flex-row rounded-3xl border border-black text-black text-center w-full px-5 py-2 my-8' {...rest}>

      <FcGoogle className='w-6'/>
      {isLoading ? 'Cargando...' : text}
    </Button>
  );
};

export default LoginAuth0Button;
