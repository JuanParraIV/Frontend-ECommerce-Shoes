import React from 'react'

interface Props {
  name: string
  placeholder?: string
  value?: string
}

const CheckInput: React.FC<Props> = React.forwardRef<HTMLInputElement, Props>(function CheckInput(
  { name, value, ...rest },
  ref,
) {
  return (
    
    <div className='absolute left-0'>
      <div className="mt-2">
        <label className="inline-flex items-center">
        <input
        id="check"
        type="checkbox"
        value={value}
        ref={ref}
        className="w-3 h-3 rounded-full" />
          <span className="ml-2">{name}</span>
        </label>
      </div>
    </div>
  )
})

export default CheckInput