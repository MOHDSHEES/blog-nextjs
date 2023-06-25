import React, { createContext, useState } from "react";

// Create the context
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {
  const [trending, setTrending] = useState([]);
  const [data, setData] = useState([]);

  return (
    <MyContext.Provider value={{ trending, setTrending, data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
