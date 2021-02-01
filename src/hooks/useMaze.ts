import React, { useEffect, useState } from 'react';
import StateResult from '../enums/StateResultEnum';
import ICell from '../interfaces/ICell';
import IDirection from '../interfaces/IDirection';
import IGameState from '../interfaces/IGameState';
import IMazeResponse from '../interfaces/IMazeResponse';
import useHTTP from '../hooks/useHTTP';
import { PONY_ENDPOINT } from '../global/endpoints'
import reShapeArray from '../util/reShapeArray'
import PlayerState from '../enums/PlayerStateEnum';



export default function useMaze({mazeId,messageDispatch}:{mazeId:string, messageDispatch({type,payload}:{type:string,payload:string}):void}){
    const [ponyPosition, setPonyPosition] = useState<number>(0)
    const [domokunPosition, setDomokunPosition] = useState<number>(0)
    const [endPointPosition, setEndPointPosition] = useState<number>(0)
    const [reShapedMaze, setReshapedMaze] = useState<ICell[][]>([])
    const [width, setWidth] = useState<number>(0)
    const [height, setHeight] = useState<number>(0);
    const [isMazeInitialized, setIsMazeInitialized] = useState(false);
    const {get:fetchMaze, error:fetchMazeError, response:fetchMazeResponse,loading:fetchMazeLoading } = useHTTP()
    const {post:makeMove, error:makeMoveError, response:makeMoveResponse, loading:makeMoveLoading} = useHTTP();
    useEffect(()=>{
        if(fetchMazeResponse){
            if(isMazeInitialized){
                setPonyPosition(fetchMazeResponse.pony[0])
                setEndPointPosition(fetchMazeResponse['end-point'][0])
                setDomokunPosition(fetchMazeResponse.domokun[0])
            }
            else{
                setPonyPosition(fetchMazeResponse.pony[0])
                setEndPointPosition(fetchMazeResponse['end-point'][0])
                setDomokunPosition(fetchMazeResponse.domokun[0])
                setReshapedMaze(reShapeArray(fetchMazeResponse.data,fetchMazeResponse.size[0], fetchMazeResponse.size[1]))
                setWidth(fetchMazeResponse.size[0]);
                setHeight(fetchMazeResponse.size[1]);
                setIsMazeInitialized(true);
            }
 
        }
    },[fetchMazeResponse])

    useEffect(()=>{
      if(makeMoveResponse){
        if(makeMoveResponse.state === 'active' && makeMoveResponse['state-result'] === StateResult.Accepted){
            getMaze()
            messageDispatch({type:'MESSAGE_SET',payload:makeMoveResponse['state-result']})
        }
        else if(makeMoveResponse.state === PlayerState.Won ){
          messageDispatch({type:'MESSAGE_SET',payload:'You Woooooooon'})
        }
        else if(makeMoveResponse.state === PlayerState.Over ){
          messageDispatch({type:'MESSAGE_SET',payload:'Ohhh no , you loose the game'})
        }
      }
    },[makeMoveResponse])

    function getMaze(){
            fetchMaze(`${PONY_ENDPOINT}/${mazeId}`);
        
    }
    function move(cell:ICell){
        if(makeMoveLoading){
            messageDispatch({type:'MESSAGE_SET',payload:'Please wait ...'})
        }else{
            if(cell.index  === ponyPosition -1) {
                makeMove(`${PONY_ENDPOINT}/${mazeId}`,{direction:IDirection.West})
              }
              else if (cell.index === ponyPosition +1) {
                makeMove(`${PONY_ENDPOINT}/${mazeId}`,{direction:IDirection.East})
              }
              else if(cell.index === ponyPosition + width){
                makeMove(`${PONY_ENDPOINT}/${mazeId}`,{direction:IDirection.South})
              }
              else if(cell.index === ponyPosition - width) {
                makeMove(`${PONY_ENDPOINT}/${mazeId}`,{direction:IDirection.North})
              }
              else{
                messageDispatch({type:'MESSAGE_SET',payload:'Cant walk here',})
              }
        }
    }
    function moveWithKeyboard(direction:IDirection){
      if(makeMoveLoading){
        messageDispatch({type:'MESSAGE_SET',payload:'Please wait ...'})
      }else{
        makeMove(`${PONY_ENDPOINT}/${mazeId}`,{direction})
      }
    }
    return {
        ponyPosition,
        domokunPosition,
        endPointPosition,
        getMaze,
        move,
        width,
        height,
        reShapedMaze,
        moveWithKeyboard
    }
    
}