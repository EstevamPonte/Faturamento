import { createContext, ReactChild, useState,  } from "react"
import { IModal } from "../Interfaces/Modal"

interface IProps {
  children: ReactChild
}

const ModalContext = createContext({} as IModal)

export function Modal ({children}: IProps) {
  const [openModal, setOpenModal]  = useState(false)

  return (
    <ModalContext.Provider value={{openModal, setOpenModal}}>
      {children}
    </ModalContext.Provider>
  )
}

export default Modal