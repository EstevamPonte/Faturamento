import styled from "styled-components"
import React, {useState} from "react"

interface Iprops {
  placeholder?: string
  type?: string,
  name: string,
  id: string,
  onChange(e: any): any,
  value: string,
  error?: string
}

const paddingInput = 20
const GlobalInput = styled.input`
  ${(props) => {
    return {
      paddingLeft: paddingInput,
      height: 57,
      borderRadius: 5,
      outline: "none",
      border: "solid 1px #707070",
      fontSize: 16,
    }
  }}
`
const Div = styled.div`
  position: relative;
  width: 100%;
  `
const Label = styled.label`
  position: absolute;
  transform: translate(0%, -50%);
  margin-left: 20px;
  transition: 0.3s;

`

function Input(props: Iprops) {
  const [styleLabel, setStyleLabel] = useState({"fontSize": "16px", "top": "50%" })
  function onFocusInput() {
    setStyleLabel({"fontSize": "12px", "top": "20%" })
  }
  function onBlurInput() {
    if (props.value === "") {
      setStyleLabel({"fontSize": "16px", "top": "50%"})
    }

  }
  return (
    <Div>
      <Label
       htmlFor={props.id}
        style={{...styleLabel, color: props.error ? "red" : "",}}
      >{props.placeholder}</Label>
      <GlobalInput
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        type={props.type ? props.type : "text"}
        style={{
          border: props.error ? "solid 1px red" : "",
        }}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
      />
    </Div>
  )
}

export default Input