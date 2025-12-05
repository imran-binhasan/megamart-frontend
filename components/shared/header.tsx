import { Link } from "lucide-react";

export default function Header() {
    return (
        <header className="border w-full">
           <div className=" flex justify-between items-center p-4 border bg-black text-white">
            <h3>LOGO</h3>
            <p>Search bar</p>
            <div className="flex items-center justify-between border">
                <Link href="/cart">Cart </Link>
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
                <Link href="/profile">Profile</Link>
            </div>
           </div>
           <nav className="border p-3">
            This is naviagtion bar
           </nav>
        </header>
    )
}