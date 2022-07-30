import styled from "styled-components"
import Card from "../../../../Components/card/Card"
import { AiOutlineArrowDown } from "react-icons/ai";
import {IItens} from "../../../../Interfaces/SpendingList"

const ShoppingListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const CardShoppingList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

const ItemName = styled.p`
  align-self: center;
  font-size: 20px;
`

const Dates = styled.p`
  font-size: 12px;
`

const DateItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: right;
`

const Price = styled.p`
  text-align: right;
  font-size: 12px;
`
const SpanGreen = styled.span`
  color: ${props => props.theme.primary};
  font-size: 12px;
`
const Status = styled.p`
  text-align: right;
  font-size: 12px;
`
const Control = styled.p`
  text-align: right;
  font-size: 12px;
`


const IconOnDate = styled(AiOutlineArrowDown) `
  color: ${props => props.theme.secondary};
`

function ShoppingList({control, name, status, value, final_installment, date_created}:IItens) {
  const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];

  return (
    <ShoppingListContainer>
      <Card>
        <CardShoppingList>
          <ItemName>{name}</ItemName>
          <DateItemContainer>
            <Dates>{`${date_created.getDay()}/${meses[(date_created.getMonth())]}/${date_created.getFullYear()}`}</Dates>
            <IconOnDate size={25}/>
            <Dates>{`${final_installment.getDay()}/${meses[(final_installment.getMonth())]}/${final_installment.getFullYear()}`}</Dates>
          </DateItemContainer>
          <StatusContainer>
            <Price>R&#36;{value}</Price>
            <Control><SpanGreen>Controle: </SpanGreen>{control.name}</Control>
            <Status><SpanGreen>Status: </SpanGreen>{status.name}</Status>
          </StatusContainer>
        </CardShoppingList>
      </Card>
    </ShoppingListContainer>
  )
}

export default ShoppingList