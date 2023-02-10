import React from 'react'
import LockIcon from '../../Icons/lockIcon'

interface Props {

  placeholder?: string
}

const TextInput: React.FC<Props> = React.forwardRef<HTMLInputElement, Props>(function TextInput(
  { placeholder, ...rest },
  ref,
) {
  return (
    <div className='flex justify-end items-center relative'>
      <input
        type="text"
        placeholder={placeholder}
        ref={ref}
        className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400' />
      <LockIcon />
    </div>
  )
})

export default TextInput
