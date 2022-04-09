import { AxiosResponse } from "axios"
import { createContext, ReactChild, useContext, useEffect, useState } from "react"
import api from "../api"
import { IUserLogin, IUserRegister, IUserContext, IUser } from "../Interfaces/User"
import { SingInService, RegisterService } from "../Services/authServices"
import AlertBoxContext from "./alertBoxContext"

interface IProps {
  children: ReactChild
}

interface IAuthSingIn {
  handleSingIn(value: IUserLogin): void
}

const AuthUser = createContext<IUserContext>({} as IUserContext)

export function User({children}: IProps) {
  const [user, setUser] = useState<IUser | null>(null)
  const {setAlertBox} = useContext(AlertBoxContext)

  useEffect(() => {
    
    const storageUser = localStorage.getItem("@FinanceiroAuth:user")
    const storageToken = localStorage.getItem("@FinanceiroAuth:token")
    
    if(storageUser && storageToken) {
      setUser(JSON.parse(storageUser))
    }
    
  }, [])

  async function handleSingIn(value: IUserLogin) {
    try {
      const response = await SingInService(value)
      setUser(response.data.user)

      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`

      localStorage.setItem("@FinanceiroAuth:user", JSON.stringify(response.data.token))
      localStorage.setItem("@FinanceiroAuth:token", response.data.token)
    } catch (error: any) {
      if (error.response) {
        setAlertBox({show: true, message: error.response.data.error})
      }
    }
  }

  function handleDingOut() {
    localStorage.clear()
    setUser(null)
  }

  return (
    <AuthUser.Provider value={{signed: !!user, user, handleSingIn, handleDingOut}}>
      {children}
    </AuthUser.Provider>
  )
}

export default AuthUser