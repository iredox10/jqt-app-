import React from 'react'
import Button from '../components/Button'
import FormInput from '../components/FormInput'
import Header from '../components/Header'
import PageTitle from '../components/PageTitle'
import SubmitBtn from '../components/SubmitBtn'

export default function Login() {
  return (
      <div>
          <Header />
      <PageTitle title={'login'} />
      <form>
        <div className='px-10'>
          <FormInput name={"username"} placeholder={"username"} />
          <FormInput
            name={"password"}
            password={"password"}
            placeholder={"password"}
          />
        </div>
        <div className='text-center'>
          <SubmitBtn text={"login"} />
        </div>
      </form>
    </div>
  )
}
