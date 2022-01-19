import React from 'react';

export default function Ingredients({ ingredients, handleSearch, handleClick }) {
  return (
    <>
      <form>
        <div>
          {ingredients.map((item) => (
            <>
              <input
                type="checkbox"
                value={item.ingredient}
                checked={item.is_complete}
                onChange={() => {
                  handleClick(item);
                }}
              />
              <span> {item.ingredient} </span>
            </>
          ))}
        </div>
        <button className="border-black border-solid border-2" onClick={handleSearch}>
          Search
        </button>
      </form>
    </>
  );
}
