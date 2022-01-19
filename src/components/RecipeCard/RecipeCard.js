import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeCard({ allRecipes }) {
  const imgCSS = 'object-cover h-96 w-96 inline';
  return (
    <>
      <div>
        {allRecipes.map((item) => (
          <>
            <h3>{item.title}</h3>
            <Link to={`/recipe/${item.id}`}>
              <img className={imgCSS} key={item.id} src={item.images}></img>
            </Link>
          </>
        ))}
      </div>
    </>
  );
}
