import React, { useState } from "react"
import styled from "styled-components"
import Button from "../../../Components/button/Button"
import Input from "../../../Components/input/Input"
import BankList from "./BankList"

const HomeContainer = styled.div`
  margin: 16px 13px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

function Home() {
  const [date, setDate] = useState("")
  function handleChangeDate(event: React.ChangeEvent<HTMLInputElement>) {
    setDate(event.target.value)
  }
  return (
    <HomeContainer>
      <Button fontSize="35px" width="100%" label="+"/>
      <Input displayContainer="flex" width="100%" type="date" id="date" name="date" value={date} onChange={handleChangeDate}/>
      <BankList />
    </HomeContainer>
  )
}

export default Home