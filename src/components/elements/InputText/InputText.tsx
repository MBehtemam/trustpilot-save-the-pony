import styled from 'styled-components'

const InputText = styled.input`
   padding: 10px;
   &:hover{
    outline: none;
    border: 1px solid rgb(26, 102, 255);
   }
   &::focus{
    outline: none;
    border: 1px solid rgb(26, 102, 255);
   }
`
const InputSelect = styled.select`
   padding: 10px;
   &:hover{
    outline: none;
    border: 1px solid rgb(26, 102, 255);
   }
   &::focus{
    outline: none;
    border: 1px solid rgb(26, 102, 255);
   }
`


export default InputText