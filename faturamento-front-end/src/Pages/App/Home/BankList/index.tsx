import { useState, useContext } from "react"
import styled from "styled-components"
import ShoppingList from "../ShoppingList"
import {IBank} from "../../../../Interfaces/SpendingList"
import Modal from "../../../../Components/modal/Modal"
import Input from "../../../../Components/input/Input"
import * as yup from "yup"
import { useFormik } from "formik"
import Button from "../../../../Components/button/Button"
import Select from "../../../../Components/input/Select"
import AlertBoxContext from "../../../../contexts/alertBoxContext"
import api from "../../../../api"

const validationSchema = yup.object().shape({
  name: yup.string()
    .required("Obrigatório"),
  value: yup.number()
    .typeError("Deve conter somente numero")
    .required("Obrigatório"),
  control: yup.string()
    .required("Obrigatório"),
  status: yup.string()
    .required("Obrigatório"),
  instellment: yup.number()
    .typeError("Deve conter somente numero")
    .required("Obrigatório")
})

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

const PurchaseForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

function BankList({itens, name, total, controls, status, id, getSpendingListHelper}: IBank) {
  const [openModal, setOpenModal] = useState(false)
  const {setAlertBox} = useContext(AlertBoxContext)
  
  async function createItem(form: any) {
    try {
      await api.post("itens", form)
      setAlertBox({show: true, message: "Item cadastrado", style: "success"})
      setOpenModal(false)
      getSpendingListHelper()
    } catch (error) {
      setAlertBox({show: true, message: "Algum error ocorreu", style: "error"})
    }
  }

  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      name: '',
      value: '',
      control: '',
      status: '',
      instellment: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const form = {
        name: values.name,
        control_id: +values.control,
        status_id: +values.status,
        instellment: +values.instellment,
        value: +values.value,
        spending_id: id
      }
      console.log(form)
      createItem(form)
    },
  });

  return (
    <BankListContainer>
      <BankTotalContainer>
        <BankTotal>
          <Bank>
          {name}
          </Bank>
          <Total>
            Total: R&#36;{total}
          </Total>
        </BankTotal>
        <PlusItem onClick={() => setOpenModal(true)}>
          +
        </PlusItem>
      </BankTotalContainer>
      {itens.map(item => (
        <ShoppingList 
          control={item.control}
          date_created={new Date(item.date_created)}
          final_installment={new Date(item.final_installment)}
          id={item.id}
          instellment={item.instellment}
          name={item.name}
          status={item.status}
          user_reference={item.user_reference}
          value={item.value}
          key={item.id}
        />
      ))}
      <Modal title="Cadastre um item" setOpenModal={setOpenModal} openModal={openModal}>
        <PurchaseForm onSubmit={formik.handleSubmit}>
          <Input
            width="100%"
            placeholder="Nome"
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            error={formik.errors.name}
            onChange={formik.handleChange}
          />
          <Input
            error={formik.errors.value}
            width="100%"
            placeholder="Valor"
            type="text"
            id="value"
            name="value"
            value={formik.values.value}
            onChange={formik.handleChange}
          />
          <Select
            width="100%"
            placeholder="Controle"
            id="control" name="control"
            value={formik.values.control}
            onChange={formik.handleChange}
            error={formik.errors.control}
          >
            <>
              <option value=""></option>
              {controls?.map(control => (
                <option key={control.id} value={control.id}>{control.name}</option>
              ))}
            </>
          </Select>
          <Select
            width="100%"
            placeholder="Status"
            id="status"
            name="status"
            value={formik.values.status}
            onChange={formik.handleChange}
            error={formik.errors.status}
          >
            <>
              <option value=""></option>
              {status?.map(status  => (
                <option key={status.id} value={status.id}>{status.name}</option>
              ))}
            </>
          </Select>
          <Input
            error={formik.errors.instellment}
            width="100%"
            placeholder="Parcela"
            type="text"
            id="instellment"
            name="instellment"
            value={formik.values.instellment}
            onChange={formik.handleChange}
          />
          <Button width="100%" label="Cadastrar compra" type="submit"></Button>
        </PurchaseForm>
      </Modal>
    </BankListContainer>
  )
}

export default BankList