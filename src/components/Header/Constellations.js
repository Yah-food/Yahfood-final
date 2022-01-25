import React from 'react';

export default function Constellations() {
  return (
    <div className="flex flex-col justify-center ml-20 mr-24 bg-cyan-900/30 w-full rounded-lg">
      <h3 className="opacity-70 mb-8 text-2xl text-center">Constellations</h3>
      <ul className="flex flex-row justify-center">
        <li className="px-1">
          <img className="w-24 h-24" src="c1.png" />
        </li>
        <li className="px-1">
          <img className="w-24 h-24" src="c2.png" />
        </li>
        <li className="px-1">
          <img className="w-24 h-24" src="c3.png" />
        </li>
        <li className="px-1">
          <img className="w-24 h-24" src="c4.png" />
        </li>
        <li className="px-1">
          <img className="w-24 h-24" src="c5.png" />
        </li>
        <li className="px-1">
          <img className="w-24 h-24" src="c6.png" />
        </li>
      </ul>
    </div>
  );
}
