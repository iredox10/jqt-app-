import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function UserPage() {
  return (
    <div>
      <Header />
      <div className='mt-32'>
        <div className='flex justify-around'>
          <Link to={"/journals"}>
            <div className='bg-secondary-color p-10 rounded-sm font-bold capitalize text-3xl  '>
              journal
            </div>
          </Link>
          <Link to={"/quotes"}>
            <div className='bg-secondary-color p-10 rounded-sm font-bold capitalize text-3xl  '>
              quotes
            </div>
          </Link>
        </div>
        <div className='flex justify-center mt-10 '>
          <Link to={"/thoughts"}>
            <div className='bg-secondary-color p-10 rounded-sm font-bold capitalize text-3xl  '>
              thoughts
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
