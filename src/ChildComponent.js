// ChildComponent.js
import React, { forwardRef, useRef, useImperativeHandle } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  // Expose the focus method to the parent component
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return (
    <div>
      <h2>Child Component</h2>
      <input type="text" ref={inputRef} />
    </div>
  );
});

export default forwardRef(ChildComponent);
