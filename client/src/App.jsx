import {BrowserRouter, Routes, Route} from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Header from './components/Header'

export default function App() {
  return <BrowserRouter>
  <Header/>  {/*Here the header is added outside the "Routes because we want this Header to apply for all the pages*/}
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/sign-in' element={<SignIn />} />
    <Route path='/sign-up' element={<SignUp />} />
    <Route path='/about' element={<About />} />
    <Route path='/profile' element={<Profile />} />
  </Routes>
  </BrowserRouter>
}
