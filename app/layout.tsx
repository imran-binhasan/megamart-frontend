import { Montserrat, Poppins } from 'next/font/google';
import './globals.css';
import { ReactNode } from "react";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
})

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["300","400","500","600","700"], 
})

export const metadata = {
    title: 'MegaMart',
    description: 'Multivendoor e-commerce platform',
}

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased`}>{children}</body>
        </html>
    )
}