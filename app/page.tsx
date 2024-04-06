

import React from 'react';
import { useSelector } from 'react-redux';
// Adjust the import paths as necessary
import { getProducts} from "@/utils/api"; 
 // Ensure this path is correct
 import Navbar from './components/Navbar'
import CatalogView from '../components/product_list'


export default  async function Home() {
  // Using useSelector to pull state from the Redux store


  
    // Here, you would typically use the data fetched from fetchCatalog, 
    // for example, by dispatching it to your store if necessary.
    // This assumes fetchCatalog returns a promise.
    const products = await getProducts(10);
    // console.log(products );

  return (
    <div>
      {/* <p>Navigation Bar Variant: {navBarVariant}</p>
      <p>Product Card Variant: {productCardVariant}</p>
      <p>Catalog View Mode: {catalogView}</p> */}
     
      {/* <div>{products[0]}</div> */}
      <Navbar/>
      <CatalogView/>
    </div>
  );
}

