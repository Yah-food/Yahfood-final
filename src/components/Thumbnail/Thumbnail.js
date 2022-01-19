import React from 'react';
import { Link } from 'react-router-dom';

export default function Thumbnail({ recipes }) {
  const imgCSS = 'object-cover h-32 w-32 inline';
  return (
    <>
      <div>
        {recipes.map((item) => (
          <Link to={`/recipe/${item.id}`} key={item.id}>
            <img className={imgCSS} key={item.id} src={item.images} />
          </Link>
        ))}
      </div>
    </>
  );
}
