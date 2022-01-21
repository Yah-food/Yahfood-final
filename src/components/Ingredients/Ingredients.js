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
        <div className="bg-red-700/40 h-screen mt-5 rounded-t-3xl shadow-lg">
          <div className="p-10 opacity-80">
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
            <div className="flex justify-center mx-auto my-5 w-64 items-center border-2 border-lime-700/50 rounded-lg bg-lime-700/50 ">
              <button onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
