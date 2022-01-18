import React from 'react';

export default function Ingredients({ ingredients }) {
  return (
    <>
      <div>
        {ingredients.map((item) => (
          <>
            <input type="checkbox" value={item.ingredient} />
            <span> {item.ingredient} </span>
          </>
        ))}
      </div>
    </>
  );
}
