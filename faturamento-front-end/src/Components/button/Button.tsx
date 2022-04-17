import styled from "styled-components"

interface IPros {
  label: string,
  onClick?(): void,
  type?: "button" | "submit" | "reset" | undefined,
  width?: string,
  fontSize?: string
}

const GlobalButton = styled.button`
  ${(props) => {
    return {
      backgroundColor: props.theme.primary,
      border: "none",
      borderRadius: 5,
      color: props.theme.buttom.textColor,
      height: 42,
      textTransform: "uppercase",
      cursor: "pointer"
    }
  }}
`
function Button(props: IPros) {
  return (
    <GlobalButton style={{
      width: props.width ? props.width : "144px",
      fontSize: props.fontSize ? props.fontSize : "14px"
    }}
      type={props.type}
      onClick={props.onClick}
    >
      {props.label}
    </GlobalButton>
  )
}

export default Button