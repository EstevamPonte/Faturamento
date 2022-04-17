import styled from "styled-components"
import React, {useState} from "react"

interface Iprops {
  placeholder?: string
  type?: string,
  name: string,
  id: string,
  onChange(e: any): any,
  value: string,
  error?: string,
  width?: string,
  paddingLeftInput?: string,
  displayContainer?: string
}

const paddingInput = 20
const GlobalInput = styled.input`
  padding-left: ${paddingInput}px;
  height: 57px;
  border-radius: 5px;
  outline: none;
  border: solid 1px #707070;
  font-size: 16px;

  ::-webkit-calendar-picker-indicator{
    padding: ${paddingInput}px;
  }
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
    <Div style={{display: props.displayContainer ? props.displayContainer : ""}}>
      <Label
       htmlFor={props.id}
        style={{
          ...styleLabel,
          color: props.error ? "red" : "",
        }}
      >{props.placeholder}</Label>
      <GlobalInput
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        type={props.type ? props.type : "text"}
        style={{
          border: props.error ? "solid 1px red" : "",
          width: props.width ? props.width : "",
          paddingLeft: props.paddingLeftInput ? props.paddingLeftInput : "20px"
        }}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
      />
    </Div>
  )
}

export default Input