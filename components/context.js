import React, { createContext, useState } from "react";

// Create the context
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children, initialData }) => {
  const [trending, setTrending] = useState(initialData);
  //   const [value2, setValue2] = useState("Initial value 2");

  return (
    <MyContext.Provider value={{ trending, setTrending }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
