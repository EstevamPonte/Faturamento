import styled from "styled-components"
import React, {ReactChild, ReactChildren} from "react"
import { CgClose } from "react-icons/cg";

interface IProps {
  children: ReactChild | ReactChildren,
  openModal: boolean,
  setOpenModal(value: boolean): void,
  title?: string
}

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #00000060;
  z-index: 1;
  top: 0;
  flex-direction: row;
  display: flex ;
  justify-content: center;
  align-items: center;
  left: 0;
`

const Modalcontent = styled.div`
  width: 90%;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 20px;
  max-height: 90%;
  overflow: auto;
`
const ModalCloseIcon = styled(CgClose)`
  height: 2rem;
  width: 2rem;
`

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const ModalCloseButton = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 0;
  cursor: pointer;

`

function Modal(props: IProps) {
  return (
    <ModalContainer style={{display: props.openModal ? "flex" : "none"}}>
      <Modalcontent>
        <ModalHeader>
          <h2>{props.title}</h2>
          <ModalCloseButton onClick={() => props.setOpenModal(false)}>
            <ModalCloseIcon/>
          </ModalCloseButton>
        </ModalHeader>
        {props.children}
      </Modalcontent>
    </ModalContainer>
  )
}

export default Modal