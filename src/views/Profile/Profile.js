import React from 'react';
import Header from '../../components/Header/Header.js';
import { useState, useEffect } from 'react';
import { getIngredients } from '../../services/fetchData';
import Ingredients from '../../components/Ingredients/Ingredients';

export default function Profile({ logoutUser }) {
  const [ingredients, setIngredients] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getIngredients();
      setIngredients(data);
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
      <Ingredients ingredients={ingredients} />
      <h1>Welcome to your profile</h1>
    </div>
  );
}
