import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import { AiOutlineClose } from "react-icons/ai";
import { IAlertBox } from "../../Interfaces/AlertBox"
import AlertBoxContext from "../../contexts/alertBoxContext"
import { string } from "yup";

interface IProps {
  opacity: number
}
interface IPropsContent {
  colorStyle: string
}


const Div = styled.div`
    ${({opacity}: IProps) => {
      return {
        position: "absolute",
        color: "#fff",
        width: "100%",
        height: "3rem",
        opacity: opacity,
        display: "flex",
        justifyContent: "right",
        transition: "0.3s",
        zIndex: 1000
      }
    }}
    
  `

const Content = styled.div`
  ${({colorStyle}: IPropsContent) => {
    return {
      backgroundColor: colorStyle,
      color: "#fff",
      margin: "10px",
      height: "100%",
      padding: "10px",
      borderRadius: "5px",
      width: "350px",
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      position: "relative",
    }
  }}
`

const CloseAlert = styled.button`
  ${() => {
    return {
      color: "#000",
      padding: "0",
      position: "absolute",
      right: 0,
      top: 0,
      margin: "10px 10px 0 0",
      background: "none",
      border: "none",
      height: "1.2rem",
      width: "1.2rem",
      cursor: "pointer",
      "& svg": {
        height: "1.2rem",
        width: "1.2rem"
      }
    }
  }}
`

function AlertBox() {
  const {alertBox, setAlertBox} = useContext(AlertBoxContext)
  const [opacity, setOpacity] = useState(0)
  const [styleAlert, setStyleAlert] = useState("#276ef1")
  const [alertTimeout, setAlertTimeout] = useState<any>()

  useEffect(() => {
    if (alertBox.show) {
      switch (alertBox.style) {
        case "success":
          setStyleAlert("#276ef1")
          break;
        case "warning":
          setStyleAlert("#ffbc40")
          break;
        case "error":
          setStyleAlert("tomato")
          break;
        default:
          break;
      }
      setOpacity(1)
      let alertTime = setTimeout(() => {
        setOpacity(0)
      }, 5000)
      setAlertTimeout(alertTime)
    }

  }, [alertBox])

  useEffect(() => {
    if (opacity === 0) {
      clearTimeout(alertTimeout)
      setTimeout(() => {
        setAlertBox({show: false})
      }, 300)
    }
  }, [opacity])

  
  return (
    <>
      {alertBox.show &&
        <Div opacity={opacity}>
          <Content colorStyle={styleAlert}>
            <p>{alertBox.message}</p>
            <CloseAlert onClick={() => setOpacity(0)}>
              <AiOutlineClose />
            </CloseAlert>
          </Content>
        </Div>
      }
    </>
  )
}

export default AlertBox