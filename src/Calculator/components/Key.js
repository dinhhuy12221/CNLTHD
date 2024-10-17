import React from 'react'

export default function Key({ value, handleClick }) {

  return (
    <button className='key' onClick={handleClick} value={value}>
      {value}
    </button>
  )
}
