import IGameState from "./IGameState";

export default interface IMazeResponse {
    pony: [number];
    domokun: [number];
    "end-point": [number];
    size: [number, number];
    difficulty: number;
    data: Array<[string,string]>;
    "game-state": IGameState;
    maze_id: string;
  }