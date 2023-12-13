import { useContext, useEffect } from "react";
import "./App.css";
import AppContext from "./context/context";
import ProductPage from "./pages/ProductPage";

function App() {
  const { getProduct } = useContext(AppContext);

  useEffect(() => {
    getProduct();
  }, []);

  return <div>
    <ProductPage/>
  </div>;
}

export default App;
