import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';

function App() {
  const childRef = useRef(null);

  const handleClick = () => {
  
    childRef.current.focus();
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={handleClick}>Focus Child Input</button>
      <ChildComponent ref={childRef} />
    </div>
  );
}

export default App;
