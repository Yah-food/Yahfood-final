import React from 'react';

export default function Thumbnail({ recipes }) {
  const imgCSS = 'object-cover h-32 w-32 inline';
  return (
    <>
      <div>
        {recipes.map((item) => (
          <img className={imgCSS} key={item.id} src={item.images} />
        ))}
      </div>
    </>
  );
}
