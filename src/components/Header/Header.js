import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ logoutUser }) {
  return (
    <div>
      <h1>yahfood!</h1>
      <Link to="/">
        <button onClick={logoutUser}>Logout</button>
      </Link>
    </div>
  );
}
