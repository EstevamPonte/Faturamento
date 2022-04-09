import AuthRoutes from './auth.route'
import AppRoutes from './app.route'
import AuthContext from '../contexts/auth'
import { useContext} from 'react'


function Router() {
  const { signed } = useContext(AuthContext)
  return signed ? <AppRoutes /> : <AuthRoutes />
}
export default Router