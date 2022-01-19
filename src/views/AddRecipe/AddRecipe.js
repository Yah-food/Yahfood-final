import React from 'react';
import { useState } from 'react';
import RecipeForm from '../../components/RecipeForm/RecipeForm';
import { createNewRecipe } from '../../services/users';

export default function AddRecipe() {
  const [newRecipe, setNewRecipe] = useState({});

  const updateRecipeState = (key, value) => {
    newRecipe[key] = value;
    setNewRecipe({ ...newRecipe });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createNewRecipe(newRecipe);
      alert('New recipe has been added!');
    } catch {
      alert('Error, try again');
    }
    // window.location.replace('/profile');
  };

  return (
    <div>
      <RecipeForm
        {...newRecipe}
        handleSubmit={handleSubmit}
        updateRecipeState={updateRecipeState}
      />
    </div>
  );
}
