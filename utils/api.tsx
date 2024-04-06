// const BASE_URL = 'https://fakestoreapi.com';

// export const fetchCatalog = async (limit = 10) => {
//   try {
//     const response = await fetch(`${BASE_URL}/products?limit=${limit}`);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Could not fetch catalog:", error);
//     // return [];
//   }
// };
const BASE_URL = 'https://fakestoreapi.com';


export   async function getProducts (limit = 10)  {
  try {
    const response = await fetch(`${BASE_URL}/products?limit=${limit}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const products = await response.json();
    return products ;
    
    // Return the fetched data
  } catch (error) {
    console.error("Could not fetch catalog:", error);
    return []; // Return an empty array in case of an error
  }
};