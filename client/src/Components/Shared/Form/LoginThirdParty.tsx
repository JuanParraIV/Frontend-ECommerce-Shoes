

import Button from './Button';

const LoginAuth0Button = ({ isLoading = false, text = 'Submit', ...rest }) => {

  return (
    <Button type="submit" icon={isLoading ? 'spinner' : ''} className='rounded-3xl border border-black text-black text-center w-full px-5 py-2 my-8' {...rest}>
      {isLoading ? 'Cargando...' : text}
    </Button>
  );
};

export default LoginAuth0Button;
