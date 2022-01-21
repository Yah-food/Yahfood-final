import React, { useEffect, useState } from 'react';
import { getRecipeByTitle, getUserRecipeByTitle } from '../../services/fetchData';
import { Link, useHistory } from 'react-router-dom';
import { deleteRecipe } from '../../services/users';

export default function RecipeDetails(props) {
  const title = props.match.params.title;
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetchData1 = async () => {
      const userData = await getUserRecipeByTitle(title);
      setRecipe(userData);
    };
    const fetchData2 = async () => {
      const data = await getRecipeByTitle(title);
      setRecipe(data);
    };
    Promise.all([fetchData1(), fetchData2()]).then((result1, result2) => {
      setLoading(false);
    });
  }, [title, loading]);

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteRecipe(recipe);
    history.push('/profile');
  };

  return (
    <>
      <div className="pt-2">
        <Link to="/profile" className="mx-5">
          <button>Back</button>
        </Link>
      </div>
      <div className="flex justify-center font-sans text-4xl opacity-70 p-5">
        <h1>{recipe.title}</h1>
      </div>
      <div className="mx-5 shadow-lg opacity-80">
        <img src={recipe.images} />
      </div>
      <div className="flex justify-center my-5 opacity-70">
        <p>{recipe.description}</p>
      </div>
      <div className="flex justify-center mx-5 opacity-70">
        <p>{recipe.instructions}</p>
      </div>
      <Link to={`/profile/editrecipe/${recipe.title}`}>
        <div className="flex justify-center mx-auto my-5 w-64 opacity-70 items-center border-2 border-lime-700/50 rounded-lg bg-lime-700/50">
          <button>Edit</button>
        </div>
      </Link>
      <div className="flex justify-center mx-auto my-5 w-64 opacity-70 items-center border-2 border-red-700/50 rounded-lg bg-red-700/50">
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
}
