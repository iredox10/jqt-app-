import React from 'react'
import Header from '../components/Header'
import PageTitle from '../components/PageTitle'
import PlusBtn from '../components/PlusBtn'

export default function Journals() {
  return (
    <div>
      <Header />
      <PageTitle title={"journals"} />
      <div className='p-2'>
        <div className='text-white flex  bg-card-color'>
          <div className='border-r-4 p-3 border-primary-color'>
            <p>date</p>
          </div>
          <div className='p-2'>
            <h1 className='text-2xl capitalize font-bold'>journal title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              quidem temporibus quibusdam non, perferendis cumque hic esse totam
              quisquam adipisci.
            </p>
          </div>
        </div>
          </div>
          <div className='absolute bottom-5 right-2'>
              <PlusBtn link='/add-journal' />
          </div>
    </div>
  )
}
