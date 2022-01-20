import React from 'react';
import RecipeCard from '../../components/RecipeCard/RecipeCard';

export default function Results({ currentResults }) {
  return (
    <div>
      <RecipeCard allRecipes={currentResults} />
    </div>
  );
}
