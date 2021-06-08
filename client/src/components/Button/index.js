import React from 'react';
import "./style.scss";

function Button({ label, onClick }) {
  return (
    <button className="btn btn-primary" onClick={onClick}>{label}</button>
  )
}

export default Button;
