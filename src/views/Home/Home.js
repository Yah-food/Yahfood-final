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
        <div className="flex justify-center flex-col ">
          <div className="flex justify-center">
            <img className="w-24 h-24 flex justify-center mt-20 opacity-70" src="frying-pan.png" />
          </div>
          <p className="flex justify-center font-sans text-7xl opacity-70">yahfood!</p>
          <Link
            className="flex justify-center mx-auto my-20 w-64 items-center border-2 border-lime-700/50 rounded-lg bg-lime-700/50"
            to="/login"
          >
            Login
          </Link>
          <div>
            <RecipeCard allRecipes={allRecipes}></RecipeCard>
          </div>
          <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#4D7C0F80"
              fillOpacity="1"
              d="M0,288L60,261.3C120,235,240,181,360,170.7C480,160,600,192,720,176C840,160,960,96,1080,101.3C1200,107,1320,181,1380,218.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
          <div className="h-screen bg-lime-700/50"></div>
        </div>
      );
    }
  }
}
