import React, { useEffect,useRef, useReducer,useLayoutEffect, SyntheticEvent } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useMaze from '../hooks/useMaze';
import IDirection from '../interfaces/IDirection';
import {  BottomBar } from '../components/elements/'
import MazeContainer from '../components/MazeContainer/MazeContainer'
import MazeRow from '../components/MazeRow/MazeRow'
import MazeCell from '../components/MazeCell/MazeCell'
import Player from '../components/Player/Player'
import Enemy from '../components/Enemy/Enemy'
import EndPoint from '../components/Endpoint/Endpoint'
import Button, {} from '../components/elements/Button/Button'
import { Avatar, DialogBox, DialogMessage } from '../components/DialogBox/DialogBox'
import { Console } from 'console';


const messageReducer = (state:string,action:{type:string,payload:string}) => {
  switch(action.type) {
    case 'MESSAGE_SET':
      return action.payload;
    case 'MESSAGE_CLEAR':
      return ''
    default:
      return state
  }
}
export default function Game() {
  const { maze_id } = useParams<{ maze_id: string }>();
  const playerRef = useRef<HTMLDivElement>(null)
  const [message, dispatchMessage] = useReducer(messageReducer,'Click around green Circle');
  const {
    ponyPosition,
    endPointPosition,
    domokunPosition,
    getMaze,
    move,
    width,
    height,
    reShapedMaze,
    moveWithKeyboard
  } = useMaze({ mazeId: maze_id, messageDispatch:dispatchMessage });

  useEffect(() => {
    getMaze();
  }, [maze_id]);
  const scrollInto = () => {
   playerRef.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
   })
  }
  const handleKeyboard = (e:any) => {
    if (e.keyCode === 37){
      //left , west
      moveWithKeyboard(IDirection.West)
      
    } else if (e.keyCode === 39) {
      //right east
      moveWithKeyboard(IDirection.East)
    }
    else if (e.keyCode === 38) {
      //up north
      moveWithKeyboard(IDirection.North)
    }
    else if (e.keyCode === 40){
      //down south
      moveWithKeyboard(IDirection.South)
    }
  }
  return (
    <div onKeyDown={handleKeyboard}>
     <BottomBar>
       <DialogBox>
         <Avatar>
           <img src="https://img.icons8.com/dusk/2x/unicorn.png"/>
         </Avatar>
         <DialogMessage>{message}</DialogMessage>
       </DialogBox>
       <Button onClick={scrollInto}>Find Pony</Button>
      </BottomBar>
      <MazeContainer height={44*height} >
      {reShapedMaze.map((row,rowIndex)=><MazeRow  key={rowIndex}>
        {row.map((cell)=><MazeCell onClick={()=> move(cell)} north={cell.north} west={cell.west} key={cell.key}>
        {cell.index === ponyPosition ? (
            <div ref={playerRef}><Player  index={cell.index} key={cell.key} west={cell.west} east={cell.east} north={cell.north} south={cell.south}/></div>
          ) : cell.index === endPointPosition ? (
            <EndPoint/>
          ) : cell.index === domokunPosition ? (
            <Enemy/>
          ) : (
            null
          )}
        </MazeCell>)}
      </MazeRow>)}
      </MazeContainer>
    </div>
  );
}
