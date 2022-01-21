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
        <div className="bg-red-700/40 mt-5 rounded-3xl shadow-lg h-64 overflow-y-auto">
          <div className="flex justify-center font-sans text-3xl opacity-70 pt-3">
            <h1>Ingredients</h1>
          </div>
          <div className="m-5 p-2 opacity-80 grid grid-cols-2">
            {ingredients.map((item) => (
              <>
                <span>
                  <input
                    type="checkbox"
                    value={item.ingredient}
                    checked={selectedIngredients.includes(item.id)}
                    onChange={() => {
                      handleClick(item);
                    }}
                  />
                  {item.ingredient}{' '}
                </span>
              </>
            ))}
          </div>
        </div>
        <div className="flex justify-center mx-auto my-5 w-64 items-center border-2 border-lime-700/50 rounded-lg bg-lime-700/50 ">
          <button onClick={handleSearch}>Search</button>
        </div>
      </form>
    </>
  );
}
