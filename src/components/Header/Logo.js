import React from 'react';

export default function Logo() {
  return (
    <div className="flex">
      <div className="flex justify-left flex-col">
        <img className="flex justify-center opacity-90" src="Raiden.png" />
        <p className="flex justify-center mt-4 text-xl opacity-80">Raiden Shogun</p>
      </div>
    </div>
  );
}
