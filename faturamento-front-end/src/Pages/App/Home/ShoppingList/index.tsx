import styled from "styled-components"
import Card from "../../../../Components/card/Card"
import { AiOutlineArrowDown } from "react-icons/ai";

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
  justify-content: right;
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

function ShoppingList() {
  return (
    <ShoppingListContainer>
      <Card>
        <CardShoppingList>
          <ItemName>Moto</ItemName>
          <DateItemContainer>
            <Dates>15/Dezembro/2022</Dates>
            <IconOnDate size={25}/>
            <Dates>15/Fevereiro/2022</Dates>
          </DateItemContainer>
          <StatusContainer>
            <Price>R$1200</Price>
            <Control><SpanGreen>Controle: </SpanGreen>PARCELADA</Control>
            <Status><SpanGreen>Status: </SpanGreen>PENDENTE</Status>
          </StatusContainer>
        </CardShoppingList>
      </Card>
    </ShoppingListContainer>
  )
}

export default ShoppingList