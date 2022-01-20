import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeCard({ allRecipes }) {
  return (
    <>
      <div>
        <div className="flex flex-row overflow-x-auto">
          {allRecipes.map((item) => (
            <div key={item.id}>
              <h3 className="flex justify-center">{item.title}</h3>
              <Link to={`/recipe/${item.title}`}>
                <div className="object-cover h-48 w-48 flex justify-center m-5">
                  <img key={item.id} src={item.images}></img>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
