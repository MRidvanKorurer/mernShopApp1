import React, { useContext } from 'react'
import AppContext from '../context/context'
import ProductShow from './ProductShow';

const Product = () => {
    const {data} = useContext(AppContext);
  return (
    <div className=' grid grid-cols-3 justify-center items-center mt-4 gap-5 p-4'>
        {
            data.map((item) => {
                return(
                    <ProductShow key={item._id} item={item}/>
                )
            })
        }
    </div>
  )
}

export default Product