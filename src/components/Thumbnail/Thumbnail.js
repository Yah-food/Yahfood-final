import React from 'react';
import { Link } from 'react-router-dom';

export default function Thumbnail({ recipes }) {
  const imgCSS = 'object-cover h-32 w-32 inline';
  return (
    <>
      <div className="flex flex-row overflow-x-auto">
        {recipes.map((item) => (
          <Link to={`/recipe/${item.title}`} key={item.id}>
            <div className="object-cover h-32 w-32 flex justify-center m-2">
              <img
                className="object-cover h-32 w-32 shadow-lg opacity-80 "
                key={item.id}
                src={item.images}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
