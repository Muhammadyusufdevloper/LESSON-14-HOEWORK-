import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Header from './components/header/Header'
import Auth from './auth'
import Admin from './pages/admin'
import SingleRout from './pages/single-rout'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/single-rout/:id' element={<SingleRout />} />
        <Route path='/' element={<Auth />}>
          <Route path='admin' element={<Admin />}>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App