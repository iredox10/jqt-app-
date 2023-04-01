import React from 'react'

export default function SubmitBtn({text}) {
  return (
      <button className='bg-button-color hover:text-secondary-color py-2 px-4 font-bold text-xl capitalize rounded-lg'>{ text}</button>
  )
}
