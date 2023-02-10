import React from 'react'

interface Props {
  icon?: string
  onClick?: (_e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  type?: 'submit' | 'reset' | 'button'
  iconAtEnd?: boolean
  children: React.ReactNode
}

const Button: React.FC<Props> = ({ icon, onClick, className = '', iconAtEnd = true, type, children, ...rest }) => {
  const iconStyle = iconAtEnd ? 'row-reverse' : 'row'
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ flexDirection: iconStyle }}
      className={`${className ? className + ' ' : ''}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button