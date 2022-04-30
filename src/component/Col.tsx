import React from 'react';
// import Item from './Item';
import PropTypes from 'prop-types';
import './styles/Col.scss';

function Col(props: { row: any; xaxis: any; }) {
  const { row,xaxis } = props;
  console.log(xaxis,row);

  return (
    <div className="col">
      {/* { row && row.map((value, index) => {
        return <Item key={index.toString()} val={value} yaxis={index} xaxis={xaxis} />;
      })} */}
    </div>
  );
}

export default Col;
