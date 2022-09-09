import styled from "styled-components"

interface IProps {
  children: JSX.Element|JSX.Element[],
  openModal: boolean,
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
  padding: 30px 20px;
  max-height: 90%;
  overflow: auto;
`

function Modal(props: IProps) {
  return (
    <ModalContainer style={{display: props.openModal ? "flex" : "none"}}>
      <Modalcontent>
        {props.children}
      </Modalcontent>
    </ModalContainer>
  )
}

export default Modal