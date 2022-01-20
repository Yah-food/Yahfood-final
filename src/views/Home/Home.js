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
        <div className="bg-yellow-600/50 h-screen">
          <div className="flex justify-center">
            <img className="w-24 h-24 flex justify-center" src="frying-pan.png" />
          </div>
          <h1 className="flex justify-center font-sans">Yafood!</h1>
          <Link className="flex justify-center" to="/login">
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
