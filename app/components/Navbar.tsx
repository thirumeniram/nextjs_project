// Navbar.tsx
"use client"
import React,{useEffect} from 'react';
import { useStore,useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
 // Adjust this import path to where your RootState is defined

const Navbar: React.FC = () => {
  // Accessing the navBarVariant from the global state
  const navBarVariant = useSelector((state: RootState) => state.display.navBarVariant);
  console.log('Current navBarVariant in Navbar:', navBarVariant);
  return (
    <div>
      {/* Conditional rendering based on the navBarVariant */}
      {navBarVariant}
      {navBarVariant === 'NavBar1' && <div>This is Navbar Variant 1</div>}
      {navBarVariant === 'NavBar2' && <div>This is Navbar Variant 2</div>}
    </div>
  );
};
 
export default Navbar;

// const Navbar: React.FC = () => {
//   const store = useStore();
//   const navBarVariant = useSelector((state: RootState) => state.display.navBarVariant);

//   useEffect(() => {
//     const unsubscribe = store.subscribe(() => {
//       console.log('Store updated:', store.getState().display.navBarVariant);
//     });

//     return () => unsubscribe();
//   }, [store]);

//   return (
//     <div>
//       {navBarVariant}
//       {/* Conditional rendering based on navBarVariant */}
//     </div>
//   );
// };

// export default Navbar;
