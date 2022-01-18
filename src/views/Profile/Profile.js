import React from 'react';
import Header from '../../components/Header/Header';

export default function Profile({ logoutUser }) {
  return (
    <div>
      <Header logoutUser={logoutUser} />
      <h1>Welcome to your profile</h1>
    </div>
  );
}
