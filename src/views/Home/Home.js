import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { getAllRecipes } from '../../services/fetchData';

export default function Home() {
  const [allRecipes, setAllRecipes] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllRecipes();
      setAllRecipes(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  {
    if (loading) {
      return <h1>loading... </h1>;
    } else {
      return (
        <div className="flex justify-center flex-col">
          <div className="flex justify-center">
            <img className="w-24 h-24 flex justify-center mt-20 opacity-70" src="frying-pan.png" />
          </div>
          <p className="flex justify-center font-sans text-7xl opacity-70">yafood!</p>
          <Link
            className="flex justify-center mx-auto my-20 w-64 items-center border-2 border-lime-700/50 rounded-lg bg-lime-700/50"
            to="/login"
          >
            Login
          </Link>
          <div>
            <RecipeCard allRecipes={allRecipes}></RecipeCard>
          </div>
        </div>
      );
    }
  }
}
