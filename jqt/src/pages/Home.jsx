import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import useFetch from '../hooks/useFetch'

export default function Home() {

  const {data, error } = useFetch('http://localhost:5000/')

  return (
    <div className='text-white text-center'>
      <div>logo</div>
      <div className='text-4xl my-20'>
        <span className='block'>welcome</span>
        <span className='block'>to</span>
        <span className='block'>journal, thought, quote</span>
        <span className='block'>(jqt) app</span>
      </div>
      <div>
        <Button text={"login"} link='/login' />
          </div>
          <div>
              <p className='capitalize font-bold italic my-10'>you don't have an account? <Link to={'/sign-up'} className='text-button-color underline'>sign up</Link></p>
          </div>
    </div>
  )
}
