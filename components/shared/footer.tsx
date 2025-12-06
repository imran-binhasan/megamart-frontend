import Link from "next/link";
import { Facebook, Youtube, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Support Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+8801601262260" className="hover:text-white transition-colors">
                  +880 1601-262260
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:megamart@gmail.com" className="hover:text-white transition-colors">
                  megamart@gmail.com
                </a>
              </li>
              <li className="mt-4">
                <p className="text-xs text-gray-400 mb-2">Follow Us</p>
                <div className="flex gap-3">
                  <Link 
                    href="https://facebook.com" 
                    target="_blank"
                    className="hover:text-blue-500 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </Link>
                  <Link 
                    href="https://youtube.com" 
                    target="_blank"
                    className="hover:text-red-500 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube size={20} />
                  </Link>
                  <Link 
                    href="https://instagram.com" 
                    target="_blank"
                    className="hover:text-pink-500 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </Link>
                  <Link 
                    href="https://twitter.com" 
                    target="_blank"
                    className="hover:text-sky-500 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About Us</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/track-order" className="hover:text-white transition-colors">
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Mega Mart
                </Link>
              </li>
            </ul>
          </div>

          {/* Policy Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Policy</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/policy/payment" className="hover:text-white transition-colors">
                  EMI & Payment Policy
                </Link>
              </li>
              <li>
                <Link href="/policy/return" className="hover:text-white transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="/policy/warranty" className="hover:text-white transition-colors">
                  Warranty Policy
                </Link>
              </li>
              <li>
                <Link href="/policy/delivery" className="hover:text-white transition-colors">
                  Delivery Policy
                </Link>
              </li>
              <li>
                <Link href="/policy/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Mega Mart</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <div className="leading-relaxed">
                  <p className="flex items-center gap-1">
                    <MapPin size={16} className="mt-0.5" /> 
                    Rampura, Dhaka
                  </p>
                  <p className="ml-5">Bangladesh</p>
                </div>
              </li>
              <li className="mt-4">
                <p className="text-xs text-gray-400 mb-2">Newsletter</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm focus:outline-none focus:border-gray-500 transition-colors"
                  />
                  <button className="px-4 py-2 bg-white text-black rounded text-sm font-medium hover:bg-gray-200 transition-colors">
                    Subscribe
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 text-center text-gray-400 text-sm">
          <p>© 2025 Mega Mart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}