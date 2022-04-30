import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import {AppContext} from '../storeContext/AppContext';
import {increment} from '../storeContext/actions/app';
import './styles/Item.scss';

function Item(props: { val: any; yaxis: any; xaxis: any; }) {
  const { dispatch } = useContext(AppContext);
  const { val, yaxis, xaxis } = props;

  const handleClick = () => {
    dispatch(increment());
  };

  return (
    <div>
      <div className={`Item ${val===1? 'Item-live' :'Item-death'}`} onClick={handleClick}>
        {/* {val} */}
        {`x ${xaxis}, y ${yaxis}`}
      </div>

    </div>
  );
}
// Item.propTypes = {
//   val: PropTypes.number,
//   xaxis:PropTypes.string,
//   yaxis:PropTypes.string
// };

export default Item;
