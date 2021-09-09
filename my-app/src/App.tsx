import React from 'react';
import Screen from './Screen';
import ControllerL from './ControllerL';
import ControllerR from './ControllerR';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Console">
        <ControllerL></ControllerL>
        <Screen></Screen>
        <ControllerR></ControllerR>
      </div>
    </div>
  );
}

export default App;
