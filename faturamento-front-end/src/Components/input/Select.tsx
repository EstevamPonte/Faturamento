import styled from "styled-components"
import React, {ReactChild, ReactChildren, useState} from "react"
import Error from "../Form/Error"

interface Iprops {
  placeholder?: string
  name?: string,
  id?: string,
  onChange(e?: any): void,
  value?: string,
  error?: string,
  width?: string,
  paddingLeftInput?: string,
  displayContainer?: string,
  children: ReactChild | ReactChildren,
}

const paddingInput = 20
const GlobalSelect = styled.select`
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

function Select(props: Iprops) {
  const [styleLabel, setStyleLabel] = useState({"fontSize": "16px", "top": "50%" })

  function onChangeSelect(e:any) {
    if (e.target.value === "") {
      setStyleLabel({"fontSize": "16px", "top": "50%"})
    } else {
      setStyleLabel({"fontSize": "12px", "top": "20%" })
    }
    props.onChange(e)
  }
  return (
    <div style={{display: props.displayContainer ? props.displayContainer : ""}}>
      <Div>
        <Label
        htmlFor={props.id}
          style={{
            ...styleLabel,
            color: props.error ? "red" : "",
          }}
        >{props.placeholder}</Label>
        <GlobalSelect
          name={props.name}
          id={props.id}
          onChange={onChangeSelect}
          value={props.value}
          style={{
            border: props.error ? "solid 1px red" : "",
            width: props.width ? props.width : "",
            paddingLeft: props.paddingLeftInput ? props.paddingLeftInput : "20px"
          }}
        >
          {props.children}
        </GlobalSelect>
      </Div>
      {props.error && <Error>{props.error}</Error>}
    </div>
  )
}

export default Select