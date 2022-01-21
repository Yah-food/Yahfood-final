import React from 'react';
import { useState } from 'react';
import RecipeForm from '../../components/RecipeForm/RecipeForm';
import { createNewRecipe } from '../../services/users';
import { useHistory } from 'react-router-dom';

export default function AddRecipe() {
  const history = useHistory();
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
      history.push('/profile');
    } catch {
      alert('Error, try again');
    }
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
