import React from 'react';

export default function Ingredients({
  ingredients,
  handleSearch,
  handleClick,
  selectedIngredients,
}) {
  return (
    <>
      <form>
        <div className="bg-red-700/40 h-screen mt-5 rounded-t-3xl">
          <div className="p-10">
            {ingredients.map((item) => (
              <>
                <input
                  type="checkbox"
                  value={item.ingredient}
                  checked={selectedIngredients.includes(item.id)}
                  onChange={() => {
                    handleClick(item);
                  }}
                />
                <span> {item.ingredient} </span>
              </>
            ))}
            <div>
              <button className="border-black border-solid border-2" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
