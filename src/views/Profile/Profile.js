import React from 'react';
import Header from '../../components/Header/Header.js';
import { useState, useEffect } from 'react';
import { getAllRecipes, getIngredients, getRecipeByIngredients } from '../../services/fetchData';
import Ingredients from '../../components/Ingredients/Ingredients';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import { useHistory } from 'react-router-dom';

export default function Profile({ logoutUser, setCurrentResults }) {
  const [ingredients, setIngredients] = useState({});
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getIngredients();
      setIngredients(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllRecipes();
      setRecipes(data);
      setLoading(false);
    };
    fetchData();
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

  if (loading) {
    return <h3>Loading</h3>;
  }

  return (
    <div>
      <Header logoutUser={logoutUser} />
      <Thumbnail recipes={recipes} />
      <Ingredients
        ingredients={ingredients}
        handleSearch={handleSearch}
        handleClick={handleClick}
        selectedIngredients={selectedIngredients}
      />
      <h1>Welcome to your profile</h1>
    </div>
  );
}
