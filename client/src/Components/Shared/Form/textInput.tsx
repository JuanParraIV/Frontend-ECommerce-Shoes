import React from 'react'
import LockIcon from '../../Icons/lockIcon'

interface Props {
  name:string
  placeholder?: string
  value: string
  onChange: (event: React.FormEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<Props> = React.forwardRef<HTMLInputElement, Props>(function TextInput(
  { ...rest },
  ref,
) {
  return (
    <div className='flex justify-end items-center relative'>
      <input
        type="text"
        {...rest}
        ref={ref}
        className='rounded-lg text-gray-400 p-3 border border-gray-400 placeholder:text-gray-400' />
      <LockIcon />
    </div>
  )
})

export default TextInput
