import React, { useState } from 'react';

function Item({ name, category }) {
  const [mode, setMode] = useState('');
  return (
    <li className={mode}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className="add"
        onClick={() => {
          mode === '' ? setMode('in-cart') : setMode('');
        }}
      >
        {mode === '' ? 'Add to Cart' : 'Remove From Cart'}
      </button>
    </li>
  );
}

export default Item;
