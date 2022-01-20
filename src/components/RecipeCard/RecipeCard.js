import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeCard({ allRecipes }) {
  return (
    <>
      <div>
        <div className="flex flex-row overflow-x-auto">
          {allRecipes.map((item) => (
            <div key={item.id}>
              <Link to={`/recipe/${item.title}`}>
                <div className="object-cover h-48 w-48 flex justify-center m-5">
                  <img className="shadow-lg opacity-80" key={item.id} src={item.images}></img>
                </div>
              </Link>
              <h3 className="flex justify-center text-white/60">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
