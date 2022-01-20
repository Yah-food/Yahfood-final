import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getUserRecipeByTitle } from '../../services/fetchData';
import RecipeForm from '../../components/RecipeForm/RecipeForm';
import { editRecipe } from '../../services/users';
export default function EditRecipe() {
  const [recipe, setRecipe] = useState({});
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserRecipeByTitle(params.title);
      setRecipe(data);
    };
    fetchData();
  }, [params.title]);

  const updateRecipeState = (key, value) => {
    recipe[key] = value;
    setRecipe({ ...recipe });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editRecipe(recipe);
      alert('Recipe has been edited!');
    } catch {
      alert('Error, try again');
    }
    history.push(`/recipe/${recipe.title}`);
  };



  return (
    <div>
      <RecipeForm {...recipe} handleSubmit={handleSubmit} updateRecipeState={updateRecipeState} />
    </div>
  );
}
