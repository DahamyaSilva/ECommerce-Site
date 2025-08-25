import React from "react";
import PropTypes from 'prop-types';
import {ShoppingBasket} from 'lucide-react'

function Product( {brand, name, id, price, image, description, onAddToCart }){

    return (
        <div className="bg-white/30 rounded-r-2xl ml-0 mt-36 w-[600px] h-[600px] fixed">
            <p className="text-lg font-extralight text-slate-500 pt-[30px] px-[30px]" >prod-id:{id}</p>
            <h2 className="text-lg font-semibold text-sky-700 pt-[30px] px-[30px]">{brand}</h2>
            <h2 className="text-xl font-semibold  text-slate-950 px-[30px]">{name}</h2>
            <h1 className="px-[30px] my-[40px]"><span className="text-lg font-semibold text-sky-700">LKR.</span> <span className="text-2xl font-bold text-slate-950 mb-2">{price}</span></h1>
            <p className="text-sm font-extralight text-slate-500 px-[30px] mb-8 text-balance">{description}</p>
            <img 
                src={image} 
                alt="prodImg" 
                className="absolute left-[500px] top-[20px] flex h-[500px] rotate-[15deg]"
                style={{filter: 'drop-shadow(25px 25px 5px rgba(0, 0, 0, 0.578))'}}
            />

            <button 
                onClick={onAddToCart}
                className="text-sky-700 px-[30px] hover:text-white/70 transition-all duration-200 ease-in-out hover:-translate-y-0.5"
            >
                    <ShoppingBasket className="w-10 h-10 cursor-pointer" />
            </button>

        </div>
        

    )

}

Product.propTypes = {
    brand: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
    onAddToCart: PropTypes.func

}

export default Product;