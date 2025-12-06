"use client";

import { useState } from "react";
import Link from "next/link";
import SearchBar from "./search-bar";
import { Menu, X, Gift, ShoppingCart, User, Store, ChevronRight, ChevronDown } from "lucide-react";

// Category data structure
const categories = [
  {
    id: 1,
    name: "Electronics",
    href: "/category/electronics",
    subcategories: [
      {
        id: 11,
        name: "Desktop & Laptop",
        href: "/category/electronics/desktop-laptop",
        items: ["Desktop Computers", "Laptops", "Gaming PCs", "Monitors", "Keyboards & Mouse"]
      },
      {
        id: 12,
        name: "Components & Accessories",
        href: "/category/electronics/components",
        items: ["Processors", "Graphics Cards", "RAM", "Storage", "Power Supplies", "Cases"]
      },
      {
        id: 13,
        name: "Mobile & Tablets",
        href: "/category/electronics/mobile",
        items: ["Smartphones", "Tablets", "Smart Watches", "Phone Accessories"]
      }
    ]
  },
  {
    id: 2,
    name: "Software",
    href: "/category/software",
    subcategories: [
      {
        id: 21,
        name: "Operating Systems",
        href: "/category/software/os",
        items: ["Windows", "macOS", "Linux"]
      },
      {
        id: 22,
        name: "Productivity",
        href: "/category/software/productivity",
        items: ["Office Suites", "Design Software", "Development Tools"]
      }
    ]
  },
  {
    id: 3,
    name: "Fashion",
    href: "/category/fashion",
    subcategories: [
      {
        id: 31,
        name: "Men's Fashion",
        href: "/category/fashion/men",
        items: ["Shirts", "Pants", "Shoes", "Accessories", "Watches"]
      },
      {
        id: 32,
        name: "Women's Fashion",
        href: "/category/fashion/women",
        items: ["Dresses", "Tops", "Bottoms", "Shoes", "Jewelry", "Bags"]
      },
      {
        id: 33,
        name: "Kids Fashion",
        href: "/category/fashion/kids",
        items: ["Boys Clothing", "Girls Clothing", "Baby Clothing", "Kids Shoes"]
      }
    ]
  },
  {
    id: 4,
    name: "Gadgets",
    href: "/category/gadgets",
    subcategories: [
      {
        id: 41,
        name: "Smart Home",
        href: "/category/gadgets/smart-home",
        items: ["Smart Speakers", "Security Cameras", "Smart Lights", "Thermostats"]
      },
      {
        id: 42,
        name: "Wearables",
        href: "/category/gadgets/wearables",
        items: ["Fitness Trackers", "Smart Watches", "VR Headsets"]
      }
    ]
  },
  {
    id: 5,
    name: "Accessories",
    href: "/category/accessories",
    subcategories: [
      {
        id: 51,
        name: "Tech Accessories",
        href: "/category/accessories/tech",
        items: ["Cables", "Chargers", "Power Banks", "Phone Cases", "Screen Protectors"]
      },
      {
        id: 52,
        name: "Audio",
        href: "/category/accessories/audio",
        items: ["Headphones", "Earbuds", "Speakers", "Microphones"]
      }
    ]
  },
  {
    id: 6,
    name: "Groceries",
    href: "/category/groceries",
    subcategories: [
      {
        id: 61,
        name: "Fresh Produce",
        href: "/category/groceries/produce",
        items: ["Fruits", "Vegetables", "Herbs"]
      },
      {
        id: 62,
        name: "Pantry",
        href: "/category/groceries/pantry",
        items: ["Rice & Grains", "Cooking Oil", "Spices", "Canned Goods"]
      },
      {
        id: 63,
        name: "Beverages",
        href: "/category/groceries/beverages",
        items: ["Water", "Soft Drinks", "Juice", "Tea & Coffee"]
      }
    ]
  }
];

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [expandedSubcategory, setExpandedSubcategory] = useState<number | null>(null);

  const toggleCategory = (categoryId: number) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    setExpandedSubcategory(null);
  };

  const toggleSubcategory = (subcategoryId: number) => {
    setExpandedSubcategory(expandedSubcategory === subcategoryId ? null : subcategoryId);
  };

  return (
    <header className="lg:hidden sticky top-0 z-50 bg-white border-b">
      {/* Row 1: Menu, Logo, Icons */}
      <div className="flex items-center justify-between px-4 py-3 bg-black text-white">
        {/* Menu Icon */}
        <button
          onClick={() => setMenuOpen(true)}
          className="p-1 hover:bg-gray-800 rounded transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="font-medium tracking-wider text-lg">MEGAMART</h1>
        </Link>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <Link href="/offers" aria-label="View offers">
            <Gift size={20} />
          </Link>
          <Link href="/login" aria-label="Login">
            <User size={20} />
          </Link>
          <Link href="/cart" aria-label="View cart">
            <ShoppingCart size={20} />
          </Link>
          <Link href="/seller" aria-label="Become a seller">
            <Store size={20} />
          </Link>
        </div>
      </div>

      {/* Row 2: Search Bar */}
      <div className="px-4 py-3 bg-black">
        <SearchBar />
      </div>

      {/* Side Menu Overlay */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMenuOpen(false)}
          />

          {/* Side Menu */}
          <div className="fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-xl overflow-y-auto">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 bg-black text-white">
              <h2 className="font-medium text-lg">Menu</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1 hover:bg-gray-800 rounded transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Categories */}
            <nav className="py-2">
              {categories.map((category) => (
                <div key={category.id} className="border-b border-gray-100">
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{category.name}</span>
                    <ChevronDown
                      size={20}
                      className={`text-gray-500 transition-transform ${
                        expandedCategory === category.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Subcategories */}
                  {expandedCategory === category.id && (
                    <div className="bg-gray-50">
                      {category.subcategories.map((subcategory) => (
                        <div key={subcategory.id}>
                          {/* Subcategory Header */}
                          <button
                            onClick={() => toggleSubcategory(subcategory.id)}
                            className="w-full flex items-center justify-between px-6 py-2.5 text-left hover:bg-gray-100 transition-colors"
                          >
                            <span className="text-sm font-medium text-gray-800">
                              {subcategory.name}
                            </span>
                            <ChevronRight
                              size={16}
                              className={`text-gray-500 transition-transform ${
                                expandedSubcategory === subcategory.id ? "rotate-90" : ""
                              }`}
                            />
                          </button>

                          {/* Items */}
                          {expandedSubcategory === subcategory.id && (
                            <div className="bg-white">
                              {subcategory.items.map((item, idx) => (
                                <Link
                                  key={idx}
                                  href={`${subcategory.href}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {item}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Additional Menu Items */}
            <div className="p-4 border-t border-gray-200 space-y-2">
              <Link
                href="/offers"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <Gift size={20} />
                <span>Special Offers</span>
              </Link>
              <Link
                href="/seller"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <Store size={20} />
                <span>Become a Seller</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}