import React, { createContext, useState } from 'react';

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
    const [orderDetails, setOrderDetails] = useState({
        pizzaSize: '',
        toppings: [],
        delivery: false,
        quantity: 1
      });
      
      
  return (
    <PizzaContext.Provider value={{ orderDetails, setOrderDetails }}>
      {children}
    </PizzaContext.Provider>
  );
};
