import React from 'react';
import Cadrants1 from './Cadrants1';
import Cadrants2 from './Cadrants2';
import Cadrants3 from './Cadrants3'; 
import Cadrants4 from './Cadrants4';
import './App.css'; 

const App = () => {
  return (
    <div className="grid-container">
      <div className="grid-item"><Cadrants1 /></div>
      <div className="grid-item"><Cadrants2 /></div>
      <div className="grid-item"><Cadrants3 /></div>
      <div className="grid-item"><Cadrants4 /></div>
    </div>
  );
};

export default App;
