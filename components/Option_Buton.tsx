"use client"



import React from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { RootState } from '@/redux/store';
// import { setNavBarVariant, setProductCardVariant, setCatalogView } from '../redux/features/display_slice.jsx';
import { setNavBarVariant,setProductCardVariant, setCatalogView} from '@/redux/features/display_slice';

// Types representing possible values for each setting
type NavBarVariant = 'NavBar1' | 'NavBar2';
type ProductCardVariant = 'ProductCard1' | 'ProductCard2';
type CatalogView = 'carousel' | 'view_all';

// Updated Option interface to use these types
interface Option {
  value: NavBarVariant | ProductCardVariant | CatalogView;
  label: string;
}

// Define the types for the options arrays with more specific types
const navBarOptions: Option[] = [
  { value: 'NavBar1', label: 'Navigation Bar 1' },
  { value: 'NavBar2', label: 'Navigation Bar 2' },
];

const productCardOptions: Option[] = [
  { value: 'ProductCard1', label: 'Product Card 1' },
  { value: 'ProductCard2', label: 'Product Card 2' },
];

const catalogViewOptions: Option[] = [
  { value: 'carousel', label: 'Carousel View' },
  { value: 'view_all', label: 'View All' },
];

// Adjust the SettingType to cover all specific setting types
type SettingType = 'navBar' | 'productCard' | 'catalogView';

// Component remains the same


const SettingsDropdown: React.FC = () => {
  const dispatch = useDispatch();

  const navBarVariant = useSelector((state: RootState) => state.display.navBarVariant);
  const productVariant = useSelector((state: RootState) => state.display.productCardVariant);
  const  catalogVariant = useSelector((state: RootState) => state.display.catalogView);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>, type: SettingType) => {
    const value = event.target.value;

    switch(type) {
      case 'navBar':
        // Assert that the value is a NavBarVariant
        console.log('Dispatching new navbar variant:', value);

        dispatch(setNavBarVariant(value as NavBarVariant));

        break;
      case 'productCard':
        // Assert that the value is a ProductCardVariant
        dispatch(setProductCardVariant(value as ProductCardVariant));
        break;
      case 'catalogView':
        // Assert that the value is a CatalogView
        dispatch(setCatalogView(value as CatalogView));
        break;
      default:
        // Ideally, you shouldn't end up here if all cases are handled
        break;
    }
  };

  const renderOptions = (options: Option[]) => options.map(option => (
    <option key={option.value} value={option.value}>{option.label}</option>
  ));

  return (
    <div>
      <div className="inline-block relative w-64 mb-4">
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => handleChange(e, 'navBar')}
        >
          {renderOptions(navBarOptions)}
        </select>
        {/* Chevron Icon */}
      </div>

      <div className="inline-block relative w-64 mb-4">
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => handleChange(e, 'productCard')}
        >
          {renderOptions(productCardOptions)}
        </select>
        {/* Chevron Icon */}
      </div>

      <div className="inline-block relative w-64">
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => handleChange(e, 'catalogView')}
        >
          {renderOptions(catalogViewOptions)}
        </select>
        {/* Chevron Icon */}
        {navBarVariant}
        {catalogVariant}
        {productVariant}
      </div>
    </div>
  );
};

export default SettingsDropdown;