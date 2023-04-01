import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ text, link}) {
  return (
    <Link to={link} className='bg-button-color hover:text-secondary-color py-2 px-8 font-bold text-2xl capitalize rounded-lg'>{text}</Link>
  )
}
