import styled from "styled-components"
import {ReactElement, ReactChildren, ReactChild} from "react"

interface IProps {
  children: ReactChild | ReactChildren,
  title?: string
}

const Div = styled.div`
  ${(props) => {
    return {
      backgroundColor: props.theme.card.cardBackground,
      padding: 30,
      borderRadius: 5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: 20,
      width: '100%'
    }
  }}
`

const Ptitle = styled.p`
  font-weight: 400;
  font-size: 26px;
`

function Cart(props: IProps): ReactElement {
  return (
    <Div>
      {props.title && <Ptitle>{props.title}</Ptitle>}
      {props.children}
    </Div>
  )
}

export default Cart