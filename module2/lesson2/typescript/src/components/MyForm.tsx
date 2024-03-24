// Form.tsx
import React, { useRef } from "react";

const MyForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current) {
      alert("Submitted value: " + inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <h4>My Event Handler Example</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;



