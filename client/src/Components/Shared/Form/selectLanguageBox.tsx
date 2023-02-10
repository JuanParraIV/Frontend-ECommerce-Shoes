import React from 'react'
import SearchIcon from '../../Icons/searchIcon'

interface Props {
  placeholder?: string
}

const SelectLanguageInput: React.FC<Props> = React.forwardRef<HTMLInputElement, Props>(function SelectInput(
  {  ...rest },
) {
  return (
    <div className='flex w-[280px] justify-start items-center relative'>
      <select
        className='rounded-3xl w-full text-primary bg-white p-3 border border-gray-200 px-10'>
          <option >Select your language</option>
          <option selected value="1">English</option>
          <option value="2">Spanish</option>
          <option value="3">French</option>
      </select>
    </div>
  )
})

export default SelectLanguageInput