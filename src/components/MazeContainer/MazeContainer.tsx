import styled from 'styled-components';
interface IMazeContainer {
    height:number
}
const MazeContainer = styled.div<IMazeContainer>`
  width: 352px;
  height: ${({height})=> height +'px'};
  background-color: ${props => props.theme.mazeBackgroundColor};
  scroll-behavior: smooth;
  overflow: scroll;
  border-right: 2px solid black;
  border-bottom: 2px solid black;

  @media (min-width: 575px) {
    width: 528px;
  }
  @media (min-width: 768px) {
    width: 748px;
  }

  @media (min-width: 992px) {
    width: 968px;
  }
  @media (min-width: 1200px) {
    width: 1100px;
    overflow-x:hidden;
    overflow-y:scroll;
  }
`;

export default MazeContainer;
