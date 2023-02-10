import React from 'react'
import EyeIcon from '../../Icons/eyeIcon'

interface Props {
  placeholder?: string
}

// About types here: https://www.carlrippon.com/react-forwardref-typescript/
const PasswordInput: React.FC<Props> = React.forwardRef<HTMLInputElement, Props>(function PasswordInput(
  { placeholder, ...rest },
  ref,
) {
  return (
    <div className='flex justify-end items-center relative'>
      <input
        type="password"
        required
        placeholder={placeholder}
        ref={ref}
        className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400'
        {...rest}
      />
      <EyeIcon/>
    </div>
  )
})

export default PasswordInput
