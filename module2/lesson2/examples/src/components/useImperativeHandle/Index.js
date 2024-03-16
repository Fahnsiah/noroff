import React, { useImperativeHandle, useRef } from "react";

const TextInput = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} type="text" />;
});

// Parent Component
const Index = () => {
  const textInputRef = useRef();

  const handleClick = () => {
    textInputRef.current.clear();
    textInputRef.current.focus();
  };

  return (
    <div className="my-container">
      <TextInput ref={textInputRef} />
      <button onClick={handleClick}>Clear and Focus</button>
    </div>
  );
};

export default Index;
