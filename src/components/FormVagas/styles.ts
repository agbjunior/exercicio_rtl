import styled from 'styled-components'

export const FormPesquisa = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.corSecundaria};
  padding: 24px;
  border-radius: 16px;
  margin-top: 32px;
`

export const ButtonPesquisar = styled.button`
  background-color: ${(props) => props.theme.corPrincipal};
  border: 3px solid ${(props) => props.theme.corPrincipal};
  height: 35px;
  padding: 8px 24px;
  font-size: 24px;
  color: ${(props) => props.theme.corSecundaria};
  margin-left: 12px;
  cursor: pointer;
`

export const InputPesquisar = styled.input`
  padding: 8px 24px;
  outline-color: ${(props) => props.theme.corPrincipal};
`
