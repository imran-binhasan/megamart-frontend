"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

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

export default function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <nav 
      className="relative bg-gray-50 border-t"
      aria-label="Category navigation"
      onMouseLeave={() => setActiveCategory(null)}
    >
      <div className="container mx-auto">
        <ul className="flex items-center gap-1 px-3 py-3">
          {categories.map((category) => (
            <li 
              key={category.id}
              onMouseEnter={() => setActiveCategory(category.id)}
              className="relative"
            >
              <Link
                href={category.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-sm transition-colors"
              >
                {category.name}
                <ChevronDown size={16} className="text-gray-500" />
              </Link>

              {/* Mega Menu Dropdown */}
              {activeCategory === category.id && (
                <div className="absolute left-0 top-full mt-0 bg-white border border-gray-200 shadow-lg rounded-sm z-50 min-w-[600px]">
                  <div className="grid grid-cols-3 gap-4 p-6">
                    {category.subcategories.map((subcategory) => (
                      <div key={subcategory.id}>
                        <Link
                          href={subcategory.href}
                          className="block font-semibold text-gray-900 hover:text-blue-600 mb-3 text-sm"
                        >
                          {subcategory.name}
                        </Link>
                        <ul className="space-y-2">
                          {subcategory.items.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                href={`${subcategory.href}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block text-sm text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}