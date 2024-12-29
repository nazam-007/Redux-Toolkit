import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment,reset,incrementByAmount } from './Store/Slices/counter';
import { useState } from 'react';


function App() {
  const [amount,setAmount]=useState(0)
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch();

  function handleIncrementButton(){
      dispatch(increment())
  }

  function handleDecrementButton(){
    dispatch(decrement())
  }

  function handleResetButton(){
    dispatch(reset())
  }
  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount))
  }
  

  return (

    <>
    <h2>Redux Toolkit</h2>
    <div className="container">
      <button onClick={handleIncrementButton}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementButton}>-</button><br /><br />
      <button onClick={handleResetButton}>Reset</button><br /><br />
      <input 
      type="Number"
      placeholder='enter a number'
      value={amount}
      onChange={(e)=>setAmount(e.target.value)}
      />
      <br /><br />
      <button onClick={handleIncAmountClick}>Increase by Amount</button>
    </div>
    
    </>
  )
}

export default App
