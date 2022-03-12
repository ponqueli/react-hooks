import React from "react";

export const data = {
  number: 123,
  text: "Testando Context API",
};
const DataContext = React.createContext(null);

export default DataContext;
