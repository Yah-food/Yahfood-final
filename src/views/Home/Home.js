import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ setCurrentUser }) {
  return (
    <div>
      <h1>Yafood</h1>
      <Link to="/login">Login</Link>
    </div>
  );
}
