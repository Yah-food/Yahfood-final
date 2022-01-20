import React, { useEffect, useState } from 'react';
import { getRecipeByTitle, getUserRecipeByTitle } from '../../services/fetchData';

export default function RecipeDetails(props) {
  const title = props.match.params.title;
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData1 = async () => {
      const userData = await getUserRecipeByTitle(title);
      setRecipe(userData);
    };
    const fetchData2 = async () => {
      const data = await getRecipeByTitle(title);
      setRecipe(data);
    };
    Promise.all(fetchData1(), fetchData2()).then((result1, result2) => {
      setLoading(false);
    });
  }, [title, loading]);

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
