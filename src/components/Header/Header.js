import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ logoutUser }) {
  return (
    <div className="bg-lime-700/50 h-20">
      <h1>yahfood!</h1>
      <Link to="/">
        <button onClick={logoutUser}>Logout</button>
      </Link>
    </div>
  );
}
