import Link from "next/link";
import SearchBar from "./search-bar";
import CategoryNav from "./category-nav";
import { Gift, ShoppingCart, User, Store } from "lucide-react";

export default function DesktopHeader() {
  return (
    <header className="hidden lg:block border-b w-full sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center p-4 bg-black text-white">
        
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <h1 className="font-medium tracking-wider text-xl hover:text-gray-200 transition-colors">
            MEGAMART
          </h1>
        </Link>

        {/* Search */}
        <div className="w-full max-w-xl px-6 flex-1">
          <SearchBar />
        </div>

        {/* Menu */}
        <nav className="flex items-center gap-6 text-sm flex-shrink-0" aria-label="Main navigation">
          <Link 
            href="/offers" 
            className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            aria-label="View offers"
          >
            <Gift size={20} aria-hidden="true" />
            <span>Offers</span>
          </Link>
          
          <Link 
            href="/cart" 
            className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            aria-label="View cart"
          >
            <ShoppingCart size={20} aria-hidden="true" />
            <span>Cart</span>
          </Link>
          
          <Link 
            href="/login" 
            className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            aria-label="Login to account"
          >
            <User size={20} aria-hidden="true" />
            <span>Login</span>
          </Link>
          
          <Link 
            href="/seller" 
            className="flex items-center gap-2 hover:text-gray-300 transition-colors whitespace-nowrap"
            aria-label="Become a seller"
          >
            <Store size={20} aria-hidden="true" />
            <span>Become a Seller</span>
          </Link>
        </nav>
      </div>

      {/* Category Navigation */}
      <CategoryNav />
    </header>
  );
}