import React, {useContext,useEffect} from 'react';
import Col from './Col';
import GameOfLife from '../gameOfLife';
import {AppContext} from '../AppContext';
import {gridInit} from '../actions/app';

function Grid() {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    let newGame = new GameOfLife(10,10);
    dispatch(gridInit(newGame.canvasPlay));
    console.log('componentDidMount');
  }, []);

  // console.log(state.grid.length)

  return (
    <div className="grid">
      {state.grid!==null && state.grid.map((value, index) => {
        return <Col key={index.toString()} xaxis={index} row={value} />;
      })}
    </div>
  );
}

export default Grid;
