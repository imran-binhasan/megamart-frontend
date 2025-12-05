import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border w-full bg-black text-white p-6 flex flex-col items-center gap-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        
        <div>
          <h3 className="font-bold mb-2">Support</h3>
          <ul>
            <li>+8801601262260</li>
            <li>megamart@gmail.com</li>
            <ul className="flex gap-2">
                <Link href="/contact-us">Facebook</Link>
                <Link href="/faqs">Youtube</Link>
            </ul>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">About Us</h3>
          <ul>
            <li>Order Tracking</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Policy</h3>
          <ul>
            <li>EMI and Payment Policy</li>
            <li>Return Policy</li>
            <li>Warranty Policy</li>
            <li>Delivery Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Mega Mart</h3>
          <ul>
            <li>Rampura, Dhaka, Bangladesh</li>
            <li>Subscribe</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white w-full text-center mt-4">
        @ 2025 My Website. All rights reserved.
      </div>
    </footer>
  );
}
