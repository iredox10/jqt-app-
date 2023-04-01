import React from 'react'
import { Link } from 'react-router-dom'

export default function PlusBtn({link}) {
    return (
        <Link to={link} className='text-white font-bold text-4xl pb-1 px-4  bg-button-color rounded-full'>+</Link>
    )
}
