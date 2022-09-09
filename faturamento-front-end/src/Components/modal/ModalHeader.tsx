import styled from "styled-components"
import { CgClose } from "react-icons/cg";

interface IProps {
  children: JSX.Element|JSX.Element[],
  openModal: boolean,
  setOpenModal(value: boolean): void,
}
const ModalCloseIcon = styled(CgClose)`
  height: 2rem;
  width: 2rem;
`

const ModalHeaderContainer = styled.div`
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

function ModalHeader(props: IProps) {
  return (
      <ModalHeaderContainer>
        {props.children}
        <ModalCloseButton onClick={() => props.setOpenModal(false)}>
          <ModalCloseIcon/>
        </ModalCloseButton>
      </ModalHeaderContainer>
  )
}

export default ModalHeader