import styled from 'styled-components'

import TopBar from '../TopBar/TopBar'

const BottomBar = styled(TopBar)`
   background-color: #e3abb6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 5px;
  margin-bottom: 10px;
  min-height: 48px;
  @media(min-width:1100px){
    padding:10px 100px;
  }
`
export default BottomBar