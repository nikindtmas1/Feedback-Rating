import React from 'react'

const ButtonLogin = ({ children, version = 'primary', type, isDisabled = false }) => {

  return (
    <button type={type} disabled={isDisabled} className={`loginbutt loginbutt-${version}`}>
            {children}
    </button>
  )
}

export default ButtonLogin