import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ logoutUser }) {
  return (
    <div className="flex-row bg-lime-700/50 h-24 rounded-b-3xl mb-5 shadow-lg">
      <Link to="/">
        <div className="items-end mx-5 pt-2 opacity-70">
          <button onClick={logoutUser}>Logout</button>
        </div>
      </Link>
      <div className="flex justify-center font-sans text-5xl opacity-70">
        <h1>yahfood!</h1>
      </div>
    </div>
  );
}
