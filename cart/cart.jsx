import React from 'react';
import PropTypes from 'prop-types';

function Cart({ cartItems, onRemoveFromCart, onContinueShopping }) {
    // Calculate total amount
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="max-w-[800px] mx-auto rounded-2xl p-7 text-2xl mb-[30px] mt-[100px] text-slate-700">
            <h3 className="pb-4 text-center">Shopping Cart</h3>
            
            {cartItems.length === 0 ? (
                <div className="text-center text-slate-700 py-14 px-5 text-lg bg-gray-100 rounded-lg">
                    <p>Your cart is empty</p>
                </div>
            ) : (
                <>
                    <div className="mb-[30px]">
                        {cartItems.map((item, index) => (
                            <div 
                                key={`${item.id}-${index}`} 
                                className="flex justify-between items-center p-5 mb-4 rounded-xl transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-white/40 hover:shadow-md"
                            >
                                <div>
                                    <h4 className="mb-2 text-gray-800 text-sm">{item.brand}</h4>
                                    <h4 className="mb-2 text-gray-800 text-lg">{item.name}</h4>
                                    <p className="text-sky-700 font-bold text-lg">LKR.{item.price}</p>
                                </div>
                                
                                <button 
                                    onClick={() => onRemoveFromCart(index)}
                                    className="bg-[#903b35] text-white border-none py-2 px-4 rounded-md cursor-pointer text-sm transition-colors duration-200 ease-in-out hover:bg-[#d32f2f]"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center pt-5 border-t-2 border-gray-300">
                        <h4 className="font-bold text-lg mb-5 text-gray-800">Total Amount: LKR.{totalAmount.toLocaleString()}</h4>
                        <div className="flex gap-4 justify-center items-center">
                            <button 
                                onClick={onContinueShopping}
                                className="text-white border border-white py-4 px-7 rounded-lg cursor-pointer text-lg font-bold transition-colors duration-200 ease-in-out hover:bg-white hover:text-black"
                            >
                                Continue Shopping
                            </button>
                            <button className="bg-blue-500 text-white border-none py-4 px-7 rounded-lg cursor-pointer text-lg font-bold w-full max-w-[300px] transition-colors duration-200 ease-in-out hover:bg-green-500">
                                Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

Cart.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        brand: PropTypes.string,          
        price: PropTypes.number
    })).isRequired,
    onRemoveFromCart: PropTypes.func,
    onContinueShopping: PropTypes.func    
};

export default Cart;