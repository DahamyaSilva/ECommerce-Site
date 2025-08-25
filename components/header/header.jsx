import {House} from 'lucide-react'
import {ShoppingBasket} from 'lucide-react'

function Header({ onHomeClick, onCartClick, cartItemCount }) {
    return(
        <div className="flex justify-between items-start w-full fixed top-0 left-0 z-[1000] bg-transparent mt-7">
            <h1 className="text-[40px] font-semibold  text-slate-50 px-[30px] mt-3">SKINC</h1>
            <div className="flex gap-7 my-5 mx-7">
                <div 
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 ease-in-out relative hover:-translate-y-0.5 hover:bg-[#0069a8] hover:text-white" 
                    onClick={onHomeClick}
                >
                    <House />
                </div>
                <div 
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 ease-in-out relative hover:-translate-y-0.5 hover:bg-[#0069a8] hover:text-white" 
                    onClick={onCartClick}
                >
                    <ShoppingBasket />
                    {cartItemCount > 0 && (
                        <span className="cart-badge">{cartItemCount}</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header