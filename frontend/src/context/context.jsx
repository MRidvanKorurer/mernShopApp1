import React, { useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
    const [click, setClick] = useState([]);



  async function getProduct() {
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      // console.log(response);
      setData(response.data.product);
    } catch (error) {
      console.error(error);
    }
  }
console.log(data);
  const sharedValuesAndMethods = {
    data,
    getProduct,
    setClick,
    click
  };

  return (
    <AppContext.Provider value={sharedValuesAndMethods}>{children}</AppContext.Provider>
  );
};

export { Provider };
export default AppContext;
