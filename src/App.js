import React from 'react';
import './App.scss';
import Grid from './component/Grid';

function App() {
  // console.log("componentWillMount");

  // useEffect(() => {
  //   console.log("componentDidMount");
  // }, []); 

  return (
    <div className="App">
      <div className="App-header">
        <Grid />
      </div>
    </div>
  );
}

export default App;
