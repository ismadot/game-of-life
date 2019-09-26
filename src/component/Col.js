import React from 'react';
import Item from './Item'
import './styles/Col.scss';

function Col(props) {
  const { row,id } = props;
  console.log(id,row);
  
  return (
    <div className="col">
      { row && row.map((value, index) => {
        return <Item key={index.toString()} val={value} />
      })}
    </div>
  );
}

export default Col;
