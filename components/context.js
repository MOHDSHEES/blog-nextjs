import React, { createContext, useState } from "react";

// Create the context
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {
  const [trending, setTrending] = useState([]);
  const [data, setData] = useState([]);
  const [titles, setTitles] = useState(null);

  return (
    <MyContext.Provider
      value={{ trending, setTrending, data, setData, titles, setTitles }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
