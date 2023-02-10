import Logo from '../Shared/Logo'
import CheckInput from '../Shared/Form/inputCheck'
import PasswordInput from '../Shared/Form/passwordInput'
import SubmitButton from '../Shared/Form/submitButton'
import TextInput from '../Shared/Form/textInput'
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <form className='flex flex-col w-full items-center justify-center gap-5 py-12'>
      <Logo />
      <h1 className='text-center text-2xl text-[#F53F00] mt-10'>Welcome Back</h1>
      <div className='flex relative flex-col  items-center justify-center gap-5'>
        <TextInput
          placeholder='Email'
        />
        <PasswordInput
          placeholder='Password'
        />
        <div>
          <a href="" className='absolute text-red-600 underline text-xs right-0'>Forgot Password</a>
        </div>

        <div>
          <CheckInput name='Remember me.' value='remember' />
        </div>
        <SubmitButton text='Log In' />
      </div>
      <span className=" rounded-lg w-[600px] h-0.5 bg-gray-200"></span>

      <h1 className='text-center'>Don't have an account? <Link to={'/register'}><a className=' text-primary underline cursor-pointer'>Sign up</a></Link> instead.</h1>

    </form>
  )
}

export default LoginForm
