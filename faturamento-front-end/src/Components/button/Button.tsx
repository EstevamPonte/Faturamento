import styled from "styled-components"

interface IButtomType {}

interface IPros {
  label: string,
  onClick?(): void,
  type?: "button" | "submit" | "reset" | undefined
}

const GlobalButton = styled.button`
  ${(props) => {
    return {
      backgroundColor: props.theme.primary,
      border: "none",
      borderRadius: 5,
      color: props.theme.buttom.textColor,
      height: 42,
      width: 144,
      textTransform: "uppercase",
      cursor: "pointer"
    }
  }}
`
function Button(props: IPros) {
  return (
    <GlobalButton type={props.type} onClick={props.onClick}>
      {props.label}
    </GlobalButton>
  )
}

export default Button