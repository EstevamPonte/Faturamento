import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import Home from '../Pages/App/Home' 
import { Routes } from 'react-router'

function AuthRotes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default AuthRotes