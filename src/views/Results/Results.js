import React from 'react';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { Link } from 'react-router-dom';
export default function Results({ currentResults }) {
  return (
    <>
      <div>
        <div className="flex-row bg-lime-700/50 h-24 rounded-b-3xl mb-5 shadow-lg">
          <Link to="/profile" className="mx-5 py-5">
            <button>Back</button>
          </Link>
          <div className="flex justify-center font-sans text-5xl opacity-70 pt-2">
            <h1>yahfood!</h1>
          </div>
        </div>
      </div>
      <div className="flex pt-48 overflow-x-auto">
        <RecipeCard allRecipes={currentResults} />
      </div>
    </>
  );
}
