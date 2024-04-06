"use client"

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setNavBarVariant,
  setProductCardVariant,
  setCatalogView,
} from '../../redux/features/display_slice';
import SettingsDropdown from '@/components/Option_Buton';

const Settings = () => {
  const dispatch = useDispatch();

  // Local state to manage current selections
  const [navBarVariant, setNavBarVariantLocal] = useState<'NavBar1' | 'NavBar2'>('NavBar1');
  const [productCardVariant, setProductCardVariantLocal] = useState<'ProductCard1' | 'ProductCard2'>('ProductCard1');
  const [catalogView, setCatalogViewLocal] = useState<'carousel' | 'view_all'>('carousel');

  // Handlers for toggling settings
  const toggleNavBarVariant = () => {
    const newVariant = navBarVariant === 'NavBar1' ? 'NavBar2' : 'NavBar1';
    setNavBarVariantLocal(newVariant);
    dispatch(setNavBarVariant(newVariant));
  };

  const toggleProductCardVariant = () => {
    const newVariant = productCardVariant === 'ProductCard1' ? 'ProductCard2' : 'ProductCard1';
    setProductCardVariantLocal(newVariant);
    dispatch(setProductCardVariant(newVariant));
  };

  const toggleCatalogView = () => {
    const newView = catalogView === 'carousel' ? 'view_all' : 'carousel';
    setCatalogViewLocal(newView);
    dispatch(setCatalogView(newView));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Settings</h2>
      {/* <div>
      <div className="inline-block relative w-64">
  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>Really long option that will likely overlap the chevron</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
        <h3>Navigation Bar Variant</h3>
        <button onClick={toggleNavBarVariant}>
          Switch to {navBarVariant === 'NavBar1' ? 'NavBar2' : 'NavBar1'}
        </button>
      </div>
      <div>
        <h3>Product Card Variant</h3>
        <button onClick={toggleProductCardVariant}>
          Switch to {productCardVariant === 'ProductCard1' ? 'ProductCard2' : 'ProductCard1'}
        </button>
      </div>
      <div>
        <h3>Catalog View Mode</h3>
        <button onClick={toggleCatalogView}>
          Switch to {catalogView === 'carousel' ? 'view_all' : 'carousel'}
        </button> */}
      {/* </div> */}
      <SettingsDropdown/>
    </div>
  );
};

export default Settings;
