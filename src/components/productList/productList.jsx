import React from 'react';
import PropTypes from 'prop-types';

function ProductList({ products, onProductSelect, selectedProductId }) {
    return (
        <div className="mt-35 pb-12 flex flex-col absolute right-8 top-0 w-96">
            {products.map(product => (
                <div 
                    key={product.id}
                    className={`py-10 px-5 cursor-pointer rounded-xl transition-all duration-200 ease-in-out hover:bg-gray-100/30 hover:-translate-y-px 
                        ${ selectedProductId === product.id 
                            ? 'shadow-md bg-gray-100/30 border border-white' 
                            : ''
                    }`}
                    onClick={() => onProductSelect(product)}
                    style={selectedProductId === product.id ? {
                        boxShadow: '0 2px 8px rgba(33, 150, 243, 0.3)'
                    } : {}}
                    >
                    <div className="product-content">
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="h-36 w-24"
                        />
                        <div className="product-info flex flex-col items-end">
                            <span className="product-brand text-gray-500">{product.brand}</span>
                            <span className="product-name font-bold mb-2 text-slate-950">{product.name}</span>
                            <span className="product-price font-bold mb-2 text-sky-700">LKR.{product.price}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        brand: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
    })).isRequired,
    onProductSelect: PropTypes.func.isRequired,
    selectedProductId: PropTypes.number
};

export default ProductList;