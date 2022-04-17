import styled from "styled-components"
import ShoppingList from "../ShoppingList"

const BankListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const BankTotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between ;
`

const BankTotal = styled.div`
  display: flex;
  flex-direction: column;
`

const Total = styled.span`
  font-size: 12px;
`

const Bank = styled.span`
  font-size: 24px;
`

const PlusItem = styled.button`
  background: none;
  border: none;
  font-size: 35px;
  color: ${props => props.theme.primary};
`

function BankList() {
  return (
    <BankListContainer>
      <BankTotalContainer>
        <BankTotal>
          <Bank>
            Bradesco
          </Bank>
          <Total>
            Total: R$1200,00
          </Total>
        </BankTotal>
        <PlusItem>
          +
        </PlusItem>
      </BankTotalContainer>
      <ShoppingList />
      <ShoppingList />
      <ShoppingList />
    </BankListContainer>
  )
}

export default BankList