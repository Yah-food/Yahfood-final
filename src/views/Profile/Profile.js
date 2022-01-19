import React from 'react';
import Header from '../../components/Header/Header.js';
import { useState, useEffect } from 'react';
import { getAllRecipes, getIngredients } from '../../services/fetchData';
import Ingredients from '../../components/Ingredients/Ingredients';
import Thumbnail from '../../components/Thumbnail/Thumbnail';

export default function Profile({ logoutUser }) {
  const [ingredients, setIngredients] = useState({});
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <h3>Loading</h3>;
  }

  return (
    <div>
      <Header logoutUser={logoutUser} />
      <Thumbnail recipes={recipes} />
      <Ingredients ingredients={ingredients} />
      <h1>Welcome to your profile</h1>
    </div>
  );
}
