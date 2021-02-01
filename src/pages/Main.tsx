import React, { SyntheticEvent, useEffect, useState } from "react";
import IMazeProperties from "../interfaces/IMazeProperties";
import { useHistory } from "react-router-dom";
import useCreateMaze from '../hooks/useCreateMaze'
import { Alert,Button,InputGroup, InputLabel, FormContainer,InputText,InputSelect } from '../components/elements/'
import AlertType from "../enums/AlertType";

export default function Main() {
  const [width, setWidth] = useState(25);
  const [height, setHeight] = useState(25);
  const [difficulty, setDifficulty] = useState(0);
  const [playerName, setPlayerName] = useState("Applejack");
  const [formError, setFormError] = useState<string|null>(null);
  let history = useHistory();
  const { loading, error, mazeId, setMazeProperties} = useCreateMaze()
  useEffect(()=>{
    if(mazeId){
        history.push(`/game/${mazeId}`);
    }
  },[mazeId])
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if(!playerName){
      setFormError('Player name is require');
      return;
    }
    setFormError(null);
    const properties: IMazeProperties = {
      "maze-height": height,
      "maze-player-name": playerName,
      "maze-width": width,
      difficulty: difficulty
    };
    if(!loading){
      setMazeProperties(properties)
    }
  };
  return (
    <FormContainer>
    <form className="form">
      <fieldset>
        <legend>Create New Game</legend>
        {formError ? <Alert type={AlertType.ERROR} >{formError}</Alert>:null}
        {error ? <Alert type={AlertType.ERROR} >{error}</Alert>:null}
        <InputGroup>
          <InputLabel htmlFor="ponyname">Pony Name</InputLabel>
          <InputText type="text" id="ponyname" value={playerName} onChange={e => setPlayerName(e.target.value)}/>
          <span className="input-error-msg">incorrect</span>
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="width">Maze Width [between 15 to 25]</InputLabel>
          <InputSelect id="width" onChange={(e)=> setWidth(parseInt(e.target.value,10))}>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
          </InputSelect>
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="height">Maze Height [between 15 to 25]</InputLabel>
          <InputSelect id="height" onChange={(e)=> setHeight(parseInt(e.target.value,10))}>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
          </InputSelect>
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="difficulty">Maze difficulty [between 1 to 10]</InputLabel>
          <InputSelect id="difficulty" onChange={(e)=> setDifficulty(parseInt(e.target.value,10))}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </InputSelect>
        </InputGroup>

        <Button onClick={onSubmit} disabled={loading}>{loading ? 'Loading....' : 'Create New Game'}</Button>
      </fieldset>
    </form>
  </FormContainer>
  );
}
