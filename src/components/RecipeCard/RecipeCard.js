import React from 'react';

export default function RecipeCard({ allRecipes }) {
  return (
    <>
      <div>
        {allRecipes.map((item) => (
          <img key={item.id} src={item.images}></img>
        ))}
      </div>
    </>
  );
}
