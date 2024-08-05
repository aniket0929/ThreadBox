// import { Home, List, User } from "lucide-react";
// import LoginButton from "./LoginButton";
// import AuthContextProvider from "@/lib/contexts/AuthContext";
// import Link from "next/link";

// export default function Header(){
//     return <nav className="flex justify-between items-center px-7 py-3 border-b">
        
//         <Link href={"/"}>
//         <img className="h-10" src="/logo3.png" alt="" />
//         </Link>
       
//           <ul className="flex gap-6 items-center">

//             <Link href={'/'}>
//             <li className="flex items-center gap-2">
//                 <Home />
//                 Home
//             </li>
//             </Link>
//             <Link href={'/categories'}>
//             <li className="flex items-center gap-2">
//                 <List />
//                 Categories</li>
//             </Link>
//             <Link href={'/contact'}>
//             <li className="flex items-center gap-2">
//                 <User />
//                 Contact Us</li>
//             </Link>
//           </ul>
          
//           <AuthContextProvider>
//             <LoginButton/>
//           </AuthContextProvider>
//     </nav>
// }



'use client';
import { useState } from 'react';
import { Home, List, User } from "lucide-react";
import LoginButton from "./LoginButton";
import AuthContextProvider from "@/lib/contexts/AuthContext";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="relative flex items-center justify-between px-7  py-3 border-b">
            
            <Link href={"/"}>
                <img className="h-10" src="/logo3.png" alt="Logo" />
            </Link>

            {/* Hamburger menu button for mobile */}
            <div className="block md:hidden">
                <button 
                    onClick={toggleMenu} 
                    className="text-gray-500 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`fixed inset-0 z-40 bg-white border-t border-gray-200 md:hidden transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button 
                    onClick={toggleMenu} 
                    className="absolute top-4 right-4 text-gray-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <ul className="flex flex-col gap-6 p-8">
                    <Link href={'/'}>
                        <li className="flex items-center gap-2">
                            <Home />
                            Home
                        </li>
                    </Link>
                    <Link href={'/categories'}>
                        <li className="flex items-center gap-2">
                            <List />
                            Categories
                        </li>
                    </Link>
                    <Link href={'/contact'}>
                        <li className="flex items-center gap-2">
                            <User />
                            Contact Us
                        </li>
                    </Link>
                </ul>

                <div className="p-6">
                    <AuthContextProvider>
                        <LoginButton />
                    </AuthContextProvider>
                </div>
            </div>

            {/* Desktop menu */}
            <ul className="hidden md:flex gap-6 items-center">
                <Link href={'/'}>
                    <li className="flex items-center gap-2">
                        <Home />
                        Home
                    </li>
                </Link>
                <Link href={'/categories'}>
                    <li className="flex items-center gap-2">
                        <List />
                        Categories
                    </li>
                </Link>
                <Link href={'/contact'}>
                    <li className="flex items-center gap-2">
                        <User />
                        Contact Us
                    </li>
                </Link>
            </ul>
            
            <div className="hidden md:block">
                <AuthContextProvider>
                    <LoginButton />
                </AuthContextProvider>
            </div>
        </nav>
    );
}
