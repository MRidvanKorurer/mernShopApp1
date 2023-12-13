import React, { useContext } from "react";
import AppContext from "../context/context";
import axios from "axios";

const Basket = () => {
  const { click, setClick, getProduct } = useContext(AppContext);

  const handleclickToDelete = () => {
    setClick([]);
  };

  const handleClickSingleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
      getProduct();
    } catch (error) {
      console.log(error);
    }
  }

  const total = click.reduce((acc, item) => acc + item.price, 0);


  return (
    <div className=" border p-2 w-1/3 mt-4 ml-4 rounded shadow-xl">
      <h1>Sepet</h1>
      <div>
        {click.map((item) => {
          return (
            <ul className=" flex justify-between items-center border-b mt-4 gap-3" key={item._id}>
              <li className=" text-sm font-bold">{item.name}</li>
              <li className=" text-sm font-light">{item.description}</li>
              <li className=" text-sm font-bold">${item.price}</li>
              <li><button onClick={()=>handleClickSingleDelete(item._id)} className=" bg-red-600 text-white w-20 rounded hover:bg-red-700 transition-all">Sil</button></li>
            </ul>
          );
        })}
      </div>
      <p className=" mt-4 font-bold mb-4">Toplam:${total}</p>
      <button className=" bg-red-600 text-white rounded p-1" onClick={handleclickToDelete}>Sepeti Temizle</button>
    </div>
  );
};

export default Basket;
