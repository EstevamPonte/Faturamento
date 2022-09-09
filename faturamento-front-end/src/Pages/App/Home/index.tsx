import React, { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import api from "../../../api"
import Button from "../../../Components/button/Button"
import Input from "../../../Components/input/Input"
import BankList from "./BankList"
import {IBank, IControl, IStatus} from "../../../Interfaces/SpendingList"
import AuthUser from "../../../contexts/auth"
import AlertBoxContext from "../../../contexts/alertBoxContext"

const HomeContainer = styled.div`
  margin: 16px 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  
  `

const AddingBank = styled.div`
  display: flex;
  gap: 16px;
  button {
    align-self:center;
  }
`

function Home() {
  const {user} = useContext(AuthUser)
  const {setAlertBox} = useContext(AlertBoxContext)
  const [date, setDate] = useState("")
  const [bank, setBank] = useState("")
  const [showBank, setShowBank] = useState(false)
  const [spendingList, setSpendingList] = useState<Array<IBank>>()
  const [controls, setControl] = useState<Array<IControl>>([])
  const [status, setStatus] = useState<Array<IStatus>>([])

  useEffect(() => {
    getControl()
    getStatus()
  }, [])

  function getControl() {
    api.get("/control")
      .then(res => {
        setControl(res.data)
      })
  }

  function getStatus() {
    api.get("/status")
      .then(res => {
        setStatus(res.data)
      })
  }

  function handleChangeDate(event: React.ChangeEvent<HTMLInputElement>) {
    getSpendingList(event.target.value)
  }

  function handleChangeBank(event: React.ChangeEvent<HTMLInputElement>) {
    setBank(event.target.value)
  }

  async function createSpending() {
    if (bank === "") {
      setAlertBox({show: true, message: "Banco invalido", style: "warning"})
    } else {
      try {
        const data = {user_reference: user?.id, name: bank}
        const response = await api.post("/spending", data)
        if(date !== "") {
          getSpendingList(date)
        }
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  }

  function getSpendingList(date: string) {
    api.get("/spending", {params: {date: date}})
      .then(response => {
        setSpendingList([...response.data])
        setDate(date)
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  return (
    <HomeContainer>
      <Button fontSize="35px" width="100%" label={showBank ? "-" : "+"} onClick={() => setShowBank(!showBank)}/>
      {showBank &&
        <AddingBank>
          <Input placeholder="Nome do banco" type="text" id="bank" name="bank" value={bank} onChange={handleChangeBank}/>
          <Button  width="100%" label="Adicionar" onClick={createSpending}/>
        </AddingBank>
      }
      <Input displayContainer="flex" width="100%" type="month" id="date" name="date" value={date} onChange={handleChangeDate}/>
      {
        spendingList?.map(bank => (
          <>
            <BankList 
              id={bank.id}
              date_created={bank.date_created}
              itens={bank.itens}
              name={bank.name}
              total={bank.total}
              value_per_month={bank.value_per_month}
              user_reference={bank.user_reference}
              key={bank.id}
              controls={controls}
              status={status}
              getSpendingListHelper={() => getSpendingList(date)}
              date_item={date}
            />
            {console.log("Itens",bank.itens)}
          </>
        ))
      }
    </HomeContainer>
  )
}

export default Home