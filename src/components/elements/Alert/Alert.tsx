import styled from 'styled-components';
import AlertType from '../../../enums/AlertType';

interface IAlert {
  type: AlertType;
}

const Alert = styled.div<IAlert>`
  padding: 1rem 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: ${({type})=> type === AlertType.ERROR ? '#842029' :'#0f5132'};
  background-color: ${({type})=> type === AlertType.ERROR ? '#f8d7da' :'#d1e7dd'};
  border-color: ${({type})=> type === AlertType.ERROR ? '#f5c2c7' :'#badbcc'};
`;

export default Alert