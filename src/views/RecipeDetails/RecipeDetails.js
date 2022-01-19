import React, { useEffect, useState } from 'react';
import { getRecipeById } from '../../services/fetchData';

export default function RecipeDetails(props) {
  const id = props.match.params.id;
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRecipeById(id);
      setRecipe(data);
      setLoading(false);
    };
    fetchData();
  }, [id, loading]);
  return (
    <>
      <div>
        <h1>{recipe.title}</h1>
        <img src={recipe.images} />
      </div>
      <div>
        <p>{recipe.ingredients}</p>
      </div>
      <div>
        <p>{recipe.instructions}</p>
      </div>
    </>
  );
}
