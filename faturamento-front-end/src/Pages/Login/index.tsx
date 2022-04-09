import styled from "styled-components"
import Card from "../../Components/card/Card"
import Input from "../../Components/input/Input"
import Button from "../../Components/button/Button"
import { Link } from "react-router-dom"
import AuthUser from "../../contexts/auth"
import React, {useContext} from "react"
import * as yup from "yup"
import { useFormik } from "formik"

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

const validationSchema = yup.object().shape({
  name: yup.string()
    .required("Obrigatório"),
  password: yup.string()
    .required("Obrigatório")
})

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`

const LinkRegister = styled(Link)`
  color: #0090FF;
  font-weight: 500;
  text-decoration: none;
`
function Login() {
  const {handleSingIn} = useContext(AuthUser)

  const formik = useFormik({
    initialValues: {
      name: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      handleSingIn(values)
    },
  });
  
  return (
      <Div>
        <Card title="Bem Vindo">
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
              placeholder="Senha"
              name="password"
              id="password"
              onChange={(e: any) => formik.handleChange(e)}
              value={formik.values.password}
              type="password"
              error={formik.errors.password}
            />
            <Button type="submit" label="Login"/>
            <LinkRegister to="/register">
              Cadastre-se
            </LinkRegister>
          </Form>
        </Card>
      </Div>
  )
}

export default Login