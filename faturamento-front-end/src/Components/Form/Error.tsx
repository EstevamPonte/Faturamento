import styled from "styled-components"

interface IPros { 
  children: string | undefined,
}

const ErrorMessage = styled.p`
  font-size: 14px;
  color: tomato;
`
function Error(props: IPros) {
  return (
    <ErrorMessage>{props.children}</ErrorMessage>
  )
}

export default Error