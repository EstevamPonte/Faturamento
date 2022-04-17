import {useState} from "react" 
import styled from "styled-components"
import AuthContext from '../../contexts/auth'
import { useContext} from 'react'
import { FiMenu } from "react-icons/fi";

interface burguerMenuI {
  showMenu: boolean,
}

const GlobalHeader = styled.header`
  ${(props) => {
    return {
      width: "100%",
      height: "4rem",
      backgroundColor: props.theme.primary,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }}
`

const BurgueButtom = styled.button`
  ${(props) => {
    return {
      backgroundColor: props.theme.buttom.secondaryBackground,
      border: "none",
      height: 35,
      width: 35,
      borderRadius: "50%",
      cursor: "pointer",
      margin: "10px",
      position: "relative",
    }
  }}
`

const IconBurgue = styled(FiMenu)`
  ${(props) => {
    return {
      color: props.theme.secondary,
      height: "100%",
      width: "100%"
    }
  }}
`

const Title = styled.span`
  ${(props) => {
    return {
      margin: "10px",
      color: props.theme.textWhite,
      fontSize: 30
    }
  }}
`
const MenuAction = styled.button`
  transition: all 0.2s;
  height: 35px;
  width: 100%;
  background-color: ${props => props.theme.buttom.secondaryBackground};
  border: none;
  text-align: initial;
  font-size: 16px;
  border-bottom: 1px solid #999999;
  :first-child {
    border-radius: 5px 5px 0 0;
  };
`

const MenuBurgue = styled.ul`
  transition: all 0.3s;
  position: absolute;
  opacity: 1;
  height: ${ ({showMenu}:burguerMenuI) => showMenu ? "12rem" : "0rem"};
  width: 10.5rem;
  background-color: ${props => props.theme.textWhite};
  border: 1px solid #999999;
  border-radius: 5px;
  margin-left: 10px;
  max-height: 12rem;
  overflow: auto;
  list-style: none;
  padding: 0;
  visibility: ${ ({showMenu}:burguerMenuI) => showMenu ? "visible" : "hidden"};
  z-index: 1;
`

const MenuBurgueWrapper = styled.div`
  transition: all 0.2s;
  position: relative;
  border-radius: 5px;
`

function Header() {
  const { signed, handleSingOut } = useContext(AuthContext)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      {signed &&
        <GlobalHeader>
          <MenuBurgueWrapper>
            <BurgueButtom onClick={() => setShowMenu(!showMenu)}>
              <IconBurgue/>
            </BurgueButtom>
            <MenuBurgue showMenu={showMenu}>
              <li>
                <MenuAction onClick={() => console.log("oloko")}>
                  Minha conta
                </MenuAction>
              </li>
              <li>
                <MenuAction onClick={handleSingOut}>
                  Sair
                </MenuAction>
              </li>
            </MenuBurgue>
          </MenuBurgueWrapper>
          <Title>
            Faturamento
          </Title>
        </GlobalHeader>
      }
    </>
  )
}

export default Header