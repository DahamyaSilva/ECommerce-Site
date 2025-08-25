import React, {useState} from 'react';
import Header from './components/header/header.jsx';
import Product from './components/product/product.jsx';
import ProductList from './components/productList/productList.jsx';
import Cart from './components/cart/cart.jsx';
import './assets/style.css'

// Images imports
import prod1 from './assets/images/prod-1.png';
import prod2 from './assets/images/prod-2.png';
import prod3 from './assets/images/prod-3.png';
import prod4 from './assets/images/prod-4.png';


function App() {

  const products = [
    {
      id: 1,
      brand: "Skin 1004",
      name: "Centella Tone Brightning Capsule Cream",
      description: "A soothing cream that brightens dull skin while also calming irritation. The perfect skin revitalizing cream for sensitive skin.A multi-tasking moisturiser that helps improve skin tone while replenishing hydration.",
      price: 7990,
      image: prod1
    },
    {
      id: 2,
      brand: "Nacific",
      name: "Phyto Niacin Brigthening Sleeping Mask",
      price: 6990,
      description: "Wake up to a brighter complexion in the morning as it reveals the natural glow of your skin. Infused with seven types of hyaluronic acid and plant-based extracts, this mask provides deep hydration and revitalization.",
      image: prod2
    },
    {
      id: 3,
      brand: "TIA'M",
      name: "Snail & Azulene Cleanser",
      price: 4990,
      description: "Gently cleanses without disrupting the skin's moisture barrier. Formulated with snail mucin and azulene, it soothes, hydrates, and leaves skin soft, calm, and refreshed—ideal for sensitive or dry skin.",
      image: prod3
    },
    {
      id: 4,
      brand: "Haruharu WONDER",
      name: "Pure Mineral Relief Daily Sunscreen",
      price: 5500,
      description: "With antioxidant-rich black rice oil infusion, soothing and nourishing heartleaf extract, deeply hydrating hyaluronic acid, and brightening niacinamide, this mineral sunscreen moisturizes and cares for your skin, leaving a soft, hydrated, satin finish.",
      image: prod4
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState('home'); 

  // Function to handle product selection from the list
  const handleProductSelect = (product) => {
      setSelectedProduct(product);
  };

  // Function to handle adding to cart
  const handleAddToCart = () => {
    setCart(prev => [...prev, selectedProduct]);
      
  };

  // Function to handle removing from cart (by index)
  const handleRemoveFromCart = (index) => {
      setCart(prev => prev.filter((_, i) => i !== index));
  };

  // Navigation functions
  const navigateToHome = () => {
      setCurrentPage('home');
  };

  const navigateToCart = () => {
      setCurrentPage('cart');
  };

  const handleContinueShopping = () => {
    setCurrentPage('home');
};

  return ( 
      <div>
        <Header 
            onHomeClick={navigateToHome}
            onCartClick={navigateToCart}
            cartItemCount={cart.length}
        />
        
        {currentPage === 'home' ? (
            <div className="app-container">
                {/* Left side - product display */}
                <div className="left-panel">
                    <Product
                        brand={selectedProduct.brand}
                        name={selectedProduct.name}
                        id={selectedProduct.id}
                        price={selectedProduct.price}
                        description={selectedProduct.description}
                        image={selectedProduct.image}
                        onAddToCart={handleAddToCart}
                    />
                </div>

                {/* Right side - Product list */}
                <div className="right-panel">
                    <ProductList
                        products={products}
                        onProductSelect={handleProductSelect}
                        selectedProductId={selectedProduct.id}
                    />
                </div>
            </div>
        ) : (
            <div className="cart-page">
                <Cart 
                    cartItems={cart}
                    onRemoveFromCart={handleRemoveFromCart}
                    onContinueShopping={handleContinueShopping} 
                />
            </div>
        )}
      </div>
  );
}


export default App
