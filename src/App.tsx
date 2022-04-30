import React, { useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import { AppContext } from './storeContext/AppContext';
import { increment } from './storeContext/actions/app';

function App() {
  const { state , dispatch }  = useContext(AppContext);
  
  useEffect(() => {
    console.log(state);
  }, [state])

  const handleIncrement = ()=>{
    dispatch(increment())
  } 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        {state.count}
        <button onClick={handleIncrement}>Click</button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
