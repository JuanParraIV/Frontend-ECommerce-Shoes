import React from 'react'
import SearchIcon from '../../Icons/searchIcon'

interface Props {
  placeholder?: string
}

const SelectCountryInput: React.FC<Props> = React.forwardRef<HTMLInputElement, Props>(function SelectCountryInput(
  { ...rest },
) {
  return (
    <div className='flex w-[280px] justify-start items-center relative'>
      <SearchIcon />
      <select
        className='rounded-3xl w-full text-primary bg-white p-3 border border-gray-200 px-10'>
        <option selected>Country of Residence</option>
        <option value="1">Colombia</option>
        <option value="2">USA</option>
        <option value="3">CANADA</option>
      </select>
    </div>
  )
})

export default SelectCountryInput