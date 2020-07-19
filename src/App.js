import React from 'react';
import { useToggle } from "./hooks";
import './App.css';

function App() {
  const [ state, { toggle } ] = useToggle(false);

  return (
    <div className="App">
      <p>Current Boolean: {String(state)}</p>
      <p>
        <button onClick={() => toggle()}>Toggle</button>
      </p>
    </div>
  );
}

export default App;
