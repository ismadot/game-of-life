import React,{useContext,useEffect,Fragment} from 'react';
import Col from './Col'
import GameOfLife from '../gameOfLife'
import {AppContext} from '../AppContext'
import {gridInit} from '../actions/app'

function Grid() {
  const { state, dispatch } = useContext(AppContext);
  const elements = ['one', 'two', 'three'];

  useEffect(() => {
    let newGame = new GameOfLife(10,10);
    dispatch(gridInit(newGame.canvasPlay))
    console.log("componentDidMount");
  }, []); 

  // console.log(state.grid.length)

  return (
    <div className="grid">
      {state.grid!==null && state.grid.map((value, index) => {
        return <Col key={index.toString()} id={index} row={value} />
      })}
    </div>
  );
}

export default Grid;
