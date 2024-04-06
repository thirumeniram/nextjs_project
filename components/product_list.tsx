// Navbar.tsx
"use client"
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
 // Adjust this import path to where your RootState is defined

const CatalogView: React.FC = () => {
  // Accessing the navBarVariant from the global state
  const catalog = useSelector((state: RootState) => state.display.catalogView);

  return (
    <div>
      {/* Conditional rendering based on the navBarVariant */}
      {catalog === 'carousel'  && <div>This is carousel</div>}
      {catalog === 'view_all' && <div>This is  view_all</div>}
    </div>
  );
};

export default CatalogView;