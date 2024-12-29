import React from 'react';
import { useSelector } from 'react-redux';

const CounterValue = () => {
  const countValue = useSelector((state) => state.counter?.countValue);

  return <div>Counter Value: {countValue}</div>;
};

export default CounterValue;
