import React from 'react'

import Button from './Button'

const SubmitButton = ({ isLoading = false, text = 'Submit', ...rest }) => (
  <Button type="submit" icon={isLoading ? 'spinner' : ''} className='rounded-3xl bg-yellow-400 text-black text-center w-full px-5 py-2 my-8' {...rest}>
    {isLoading ? 'Cargando...' : text}
  </Button>
)

export default SubmitButton
