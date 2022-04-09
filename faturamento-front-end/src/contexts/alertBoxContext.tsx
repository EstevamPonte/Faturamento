import { createContext, ReactChild, useState,  } from "react"
import { IAlertBoxContext, IAlertBox } from "../Interfaces/AlertBox"

interface IProps {
  children: ReactChild
}

const AlertBox = createContext<IAlertBoxContext>({} as IAlertBoxContext)

export function Alert ({children}: IProps) {
  const [alertBox, setAlertBox]  = useState<IAlertBox>({show: false, style: "success"})

  return (
    <AlertBox.Provider value={{alertBox, setAlertBox}}>
      {children}
    </AlertBox.Provider>
  )
}

export default AlertBox