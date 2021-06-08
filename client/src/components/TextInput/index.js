import React from 'react';
import "./style.scss";

function TextInput({inputRef, ...props}) {
  return (
    <input {...props} ref={inputRef} />
  )
};

export default TextInput;
