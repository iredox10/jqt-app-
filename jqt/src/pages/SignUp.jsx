import axios from "axios"
import React, { useState } from "react"
import Button from "../components/Button"
import FormInput from "../components/FormInput"
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"
import SubmitBtn from "../components/SubmitBtn"

export default function Login() {
  const [fullname, setfullname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [err, setErr] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (fullname === '' || username === '' || password === '' || confirmPassword === '') { 
      setErr('please fill all the fields')
    }
    if (password !== confirmPassword) {
      setErr('password did not match')
      return
    }
    try {
      const res = await axios.post('http://localhost:5000/register', { fullname, username, password })
      console.log(res.data)
      
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <Header />
      <PageTitle title={"sign up"} />
      <form onSubmit={handleSubmit}>
        {err && <div className='text-secondary-color'>{err}</div>}
        <div className='px-10'>
          <FormInput
            name={"full name"}
            placeholder={"full name"}
            state={(e) => setfullname(e.target.value)}
          />
          <FormInput
            name={"username"}
            placeholder={"username"}
            state={(e) => setUsername(e.target.value)}
          />
          <FormInput
            name={"select password"}
            placeholder={"select password"}
            type={"password"}
            state={(e) => setPassword(e.target.value)}
          />
          <FormInput
            name={"password"}
            password={"password"}
            placeholder={"confirm password"}
            type={"password"}
            state={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className='text-center'>
          <SubmitBtn text={"sign up"} />
        </div>
      </form>
    </div>
  )
}
