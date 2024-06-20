/* eslint-disable react/prop-types */
import { createContext } from "react";

const VanContext = createContext()

export const VanProvider = ({ van, type, children }) => {

  return (
    <VanContext.Provider value={{ van, type }}>
      {children}
    </VanContext.Provider>
  );
};

export default VanContext;
