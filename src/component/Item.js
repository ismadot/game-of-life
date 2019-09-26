import React,{useContext} from 'react';
import './styles/Item.scss';
import {AppContext} from '../AppContext'
import {increment} from '../actions/app'
import { from } from 'rxjs';

function Item(props) {
  const { state, dispatch } = useContext(AppContext);
  const { val } = props;

  const handleClick = () => {
    dispatch(increment())
  }

  return (
    <div className={`Item ${val===1? "Item-live" :"Item-death"}`} onClick={handleClick}>
      {/* {val} */}
    </div>
  );
}

export default Item;
