import styled from "styled-components"
import Card from "../../Components/card/Card"
import Input from "../../Components/input/Input"
import Button from "../../Components/button/Button"
import { MdArrowBack } from "react-icons/md"
import { useContext } from "react"
import { useNavigate } from 'react-router-dom';
import AlertBoxContext from "../../contexts/alertBoxContext"
import { useFormik } from "formik"
import * as yup from "yup"
import { RegisterService } from "../../Services/authServices"
import { IUserRegister } from "../../Interfaces/User"

const validationSchema = yup.object().shape({
  name: yup.string()
    .required("Obrigatório"),
  password: yup.string()
    .required("Obrigatório"),
  confirmPassword: yup.string()
    .equals([yup.ref('password')])
    .required("Obrigatório"),
  salary: yup.string()
    .required("Obrigatório"),
})

const Div = styled.div`
  ${(props) => {
    return {
      backgroundColor: props.theme.primary,
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px 40px"
    }
  }}
`

const BackButtom = styled.button`
  ${(props) => {
    return {
      backgroundColor: props.theme.buttom.secondaryBackground,
      border: "none",
      height: 48,
      width: 48,
      borderRadius: "50%",
      position: "absolute",
      top: 0,
      left: 0,
      margin: 10,
      cursor: "pointer"
    }
  }}
`
const IconBack = styled(MdArrowBack)`
  ${(props) => {
    return {
      color: props.theme.secondary,
      fontSize: 30
    }
  }}
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`
function Register() {
  const navigate  = useNavigate()
  const {setAlertBox} = useContext(AlertBoxContext)

  async function handleRegister(value: IUserRegister) {
    try {
      const responde = await RegisterService(value)
      console.log(responde)
      if (responde) {
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      confirmPassword: '',
      salary: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values)
      if (!Number(values.salary)) {
        setAlertBox({show: true, message: "O salário deve conter somente números", style: "error"})
        return
      }
      handleRegister(values)
    },
  });

  
  
  return (
    <Div>
      <BackButtom onClick={() => navigate('/')}>
        <IconBack />
      </BackButtom>
      <Card title="Cadastre-se">
        <Form onSubmit={formik.handleSubmit}>
          <Input
            placeholder="Nome"
            name="name"
            id="name"
            onChange={(e: any) => formik.handleChange(e)}
            value={formik.values.name}
            error={formik.errors.name}
          />
          <Input
            placeholder="Salario"
            name="salary"
            id="salary"
            onChange={(e: any) => formik.handleChange(e)}
            value={formik.values.salary}
            error={formik.errors.salary}
          />
          <Input
            placeholder="Senha"
            name="password"
            id="password"
            onChange={(e: any) => formik.handleChange(e)}
            value={formik.values.password}
            error={formik.errors.password}
          />
          <Input
            placeholder="Confirmar senha"
            name="confirmPassword"
            id="confirmPassword"
            onChange={(e: any) => formik.handleChange(e)}
            value={formik.values.confirmPassword}
            error={formik.errors.confirmPassword}
          />
          <Button label="Register" type="submit"/>
        </Form>
      </Card>
    </Div>
  )
}

export default Register