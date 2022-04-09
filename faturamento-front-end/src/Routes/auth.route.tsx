import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import Login from '../Pages/Login' 
import Register from '../Pages/Register' 
import { Routes } from 'react-router'

function AuthRotes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default AuthRotes