import PlayerState from "../enums/PlayerStateEnum";
import StateResult from "../enums/StateResultEnum";
export default interface IGameState {
    state: PlayerState;
    "state-result": StateResult;
    "hidden-url"?: string;
  }