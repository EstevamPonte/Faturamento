import styled from "styled-components"

interface IProps {
  children: JSX.Element|JSX.Element[],
}

const ModalHeaderContentElement = styled.div`
  display: flex;
  flex-direction: column;
`

function ModalHeaderContent(props: IProps) {
  return (
      <ModalHeaderContentElement>
        {props.children}
      </ModalHeaderContentElement>
  )
}

export default ModalHeaderContent