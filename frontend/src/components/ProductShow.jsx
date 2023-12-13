import React, { useContext } from 'react'
import AppContext from '../context/context'

const ProductShow = ({item}) => {
    const {setClick} = useContext(AppContext);

    const handleClickAddToBasket = () => {
        setClick((prevState) => [...prevState, item]);

    }

  return (
    <div className='flex flex-col border p-2 shadow-xl '>
        <img className=' w-full h-44 rounded' src={item.image} alt="img" />
        <div className=' flex flex-col justify-around items-center gap-3'>
            <h2 className=' font-bold'>{item.name}</h2>
            <p className=' font-light'> {item.description}</p>
            <p className=' font-bold italic'>${item.price}</p>
            <button onClick={handleClickAddToBasket} className=' bg-purple-500 text-white hover:bg-purple-800 transition-all rounded p-1'>Sepete Ekle</button>
        </div>
    </div>
  )
}



export default ProductShow