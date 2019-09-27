import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
import './styles/Col.scss';

function Col(props) {
  const { row,xaxis } = props;
  console.log(xaxis,row);

  return (
    <div className="col">
      { row && row.map((value, index) => {
        return <Item key={index.toString()} val={value} yaxis={index} xaxis={xaxis} />;
      })}
    </div>
  );
}

Col.propTypes = {
  row: PropTypes.array,
  xaxis: PropTypes.string
};
export default Col;
