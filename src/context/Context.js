import { createContext, useContext, useReducer } from "react";
import faker from 'faker'; // Importing faker directly

import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  // Provided data
  const providedData = [
    {
      "id": 1,
      "name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "inStock": 5,
      "fastDelivery": false,
      "ratings": 3.9
    },
    {
      "id": 2,
      "name": "Mens Casual Premium Slim Fit T-Shirts",
      "price": 22.3,
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "inStock": 10,
      "fastDelivery": true,
      "ratings": 4.1
    },
    {
      "id": 3,
      "name": "Mens Cotton Jacket",
      "price": 55.99,
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "inStock": 15,
      "fastDelivery": false,
      "ratings": 4.7
    },
    {
      "id": 4,
      "name": "Mens Casual Slim Fit",
      "price": 15.99,
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "inStock": 20,
      "fastDelivery": true,
      "ratings": 2.1
    },
    {
      "id": 5,
      "name": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "inStock": 3,
      "fastDelivery": true,
      "ratings": 4.6
    },
    {
      "id": 6,
      "name": "Solid Gold Petite Micropave",
      "price": 168,
      "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "inStock": 8,
      "fastDelivery": false,
      "ratings": 3.9
    }
  ];

  // Update products array with provided data
  const products = providedData.map(product => ({
    id: product.id.toString(), // Ensure id is a string
    name: product.name,
    price: product.price,
    image: product.image,
    inStock: product.inStock,
    fastDelivery: product.fastDelivery,
    ratings: product.ratings
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
