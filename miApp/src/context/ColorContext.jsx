import React, {createContext, useState, useContext} from "react";

const ColorContext = createContext();

export const useColors = () => useContext(ColorContext);

export const ColorProvider = ({children}) => {
  const [backgroundColor, setBackgroundColor] = useState("#FFD83B");
  const [titleColor, setTitleColor] = useState("#000000");
  const [textColor, setTextColor] = useState("#1E293B");
  
  const value = {
    backgroundColor,
    setBackgroundColor,
    titleColor,
    setTitleColor,
    textColor,
    setTextColor,
  };

  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  );
}