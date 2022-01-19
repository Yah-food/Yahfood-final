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
        <div>
          <h1>Yafood</h1>
          <Link to="/login">Login</Link>
          <div>
            <RecipeCard allRecipes={allRecipes}></RecipeCard>
          </div>
        </div>
      );
    }
  }
}
