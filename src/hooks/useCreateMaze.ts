import React, { useState, useEffect } from 'react';
import IMazeProperties from '../interfaces/IMazeProperties';
import {PONY_ENDPOINT} from '../global/endpoints'
import useHTTP from '../hooks/useHTTP'
interface ICreateMazeResult {
  maze_id: string;
}
export default function useCreateMaze() {
  const {post,loading, error, response} = useHTTP()
  const [mazeId, setMazeId] = useState<string | null>(null);
  const [mazeProperties, setMazeProperties] = useState<IMazeProperties | null>(
    null
  );
  
  useEffect(()=>{
    if(!loading && response){
      setMazeId(response.maze_id)
    }
  },[loading])

  useEffect(() => {

     if(mazeProperties){
      post(PONY_ENDPOINT,mazeProperties);
     }
  }, [mazeProperties]);


  return { loading,  error, mazeId, setMazeProperties };
}
