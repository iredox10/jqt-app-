import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Journals from './pages/Journals'
import Thoughts from './pages/Thoughts'
import Quotes from './pages/Quotes'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import UserPage from './pages/UserPage'

function App() {
  return (
    <div className="bg-primary-color min-h-screen">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/sign-up' element={<SignUp />}></Route>
          <Route path='/user-page' element={<UserPage />}></Route>
          <Route path='/journals' element={<Journals />}></Route>
          <Route path='/quotes' element={<Quotes />}></Route>
          <Route path='/thoughts' element={<Thoughts />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
