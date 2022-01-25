import React from 'react';
import Constellations from '../components/Header/Constellations';
import Logo from '../components/Header/Logo';

export default function Home() {
  return (
    //Header Div
    <div className="flex direction row pl-24 pt-12">
      <Logo className="w-1/5" />
      <Constellations className="" />
    </div>
  );
}
