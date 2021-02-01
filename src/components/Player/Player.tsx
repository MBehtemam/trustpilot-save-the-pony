import styled from 'styled-components';
import ICell from '../../interfaces/ICell';

const PlayerContainer = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #00af84;
  border-radius: 50%;
  z-index: 2;
`;
const CharacterIndicator = styled.span`
  position: absolute;
  width: 0;
  height: 0;
`;

const CharacterIndicatorUp = styled(CharacterIndicator)`
  top: -10px;
  left: 6px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #00af84;
`;

const CharacterIndicatorLeft = styled(CharacterIndicator)`
  top: 6px;
  left: -8px;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 6px solid #00af84;
`;
const CharacterIndicatorRight = styled(CharacterIndicator)`
  top: 6px;
  left: 25px;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid #00af84;
`;
const CharacterIndicatorDown = styled(CharacterIndicator)`
  top: 25px;
  left: 6px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #00af84;
`;

function Player(props:ICell) {
  return (
    <PlayerContainer>
      {!props.north ? <CharacterIndicatorUp/>:null}
      {!props.west ? <CharacterIndicatorLeft/>:null}
      {!props.south ? <CharacterIndicatorDown/>:null}
      {!props.east ? <CharacterIndicatorRight/>:null}
    </PlayerContainer>
  );
}
export default Player;
