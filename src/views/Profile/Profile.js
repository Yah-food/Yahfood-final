import React from 'react';
import Header from '../../components/Header/Header.js';
import { useState, useEffect } from 'react';
import {
  getAllRecipes,
  getIngredients,
  getRecipeByIngredients,
  getAllUserRecipes,
} from '../../services/fetchData';
import Ingredients from '../../components/Ingredients/Ingredients';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import { Link, useHistory } from 'react-router-dom';

export default function Profile({ logoutUser, setCurrentResults }) {
  const [ingredients, setIngredients] = useState({});
  const [recipes, setRecipes] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData1 = async () => {
      const data = await getAllUserRecipes();
      setUserRecipes(data);
      setLoading(false);
    };
    const fetchData2 = async () => {
      const data = await getAllRecipes();
      setRecipes(data);
      setLoading2(false);
    };
    const fetchData3 = async () => {
      const data = await getIngredients();
      setIngredients(data);
      setLoading3(false);
    };
    fetchData1();
    fetchData2();
    fetchData3();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await getRecipeByIngredients(selectedIngredients);
    setCurrentResults(data);
    history.push('/results');
  };

  const handleClick = async (item) => {
    if (selectedIngredients.includes(item.id)) {
      const newIngredient = selectedIngredients.filter((i) => i !== item.id);

      setSelectedIngredients(newIngredient);
    } else {
      setSelectedIngredients([...selectedIngredients, item.id]);
    }
  };

  if (loading || loading2 || loading3) {
    return <h3>Loading</h3>;
  }

  return (
    <div>
      <Header logoutUser={logoutUser} />
      <div className="flex flex-row">
        <Thumbnail recipes={userRecipes} />
        <Link to="/profile/addrecipe" className="flex justify-items-center">
          <img src=""></img>
          <button>Add Recipe</button>
        </Link>
      </div>
      <Thumbnail recipes={recipes} />
      <Ingredients
        ingredients={ingredients}
        handleSearch={handleSearch}
        handleClick={handleClick}
        selectedIngredients={selectedIngredients}
      />
    </div>
  );
}
