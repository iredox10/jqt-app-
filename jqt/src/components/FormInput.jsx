import React from 'react'

export default function FormInput({type,placeholder,name,state}) {
  return (
    <div className='mb-8'>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={state}
        className='capitalize text-secondary-color p-2 w-full  border-b-2 border-secondary-color bg-primary-color '
      />
    </div>
  )
}
