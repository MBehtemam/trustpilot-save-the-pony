import styled from 'styled-components'

const MazeCell = styled.div<{north:boolean, west:boolean}>`
  width: 44px;
  height: 44px;
  flex-basis: 44px;
  flex-shrink: 0;
  flex-grow: 0;
  position: relative;
  display:flex;
  justify-content:center;
  align-items:center;
  border: 2px solid transparent;
  border-top-color:${props=> props.north ? props.theme.mazeBorderColor:'transparent'};
  border-left-color:${props=> props.west ? props.theme.mazeBorderColor:'transparent'};
  &:hover{
    background-color:rgba(0,0,0,.1);
  }

`

export default MazeCell