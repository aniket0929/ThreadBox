// import { BookUser, SquarePen,Table2, PenLine} from "lucide-react"
// import Link from "next/link"

// export default function Sidebar(){

//     const link =[
//         {
//             name : 'Dashboard',
//             link: '/admin',
//             icon: <BookUser />,
//         },
//         {
//             name : 'posts',
//             link: '/admin/posts',
//             icon: <SquarePen />,
//         },
//         {
//             name : 'categories',
//             link: '/admin/categories',
//             icon: <Table2 />,
//         },
//         {
//             name : 'authors',
//             link: '/admin/authors',
//             icon: <PenLine />,
//         },
        
//     ]
    
//      return <section className="w-[200px] border-r h-screen p-6">
//        <ul className="w-full flex flex-col gap-7">
//        {link.map((item)=>{
//             return <Link href={item.link}>
//              <li className="flex gap-3 items-center font-bold bg-blue-50 rounded-full px-5 py-2 ">
//                 {item.icon}
//                 <span className="">
//                     {item.name}
//                 </span>
//             </li>
//             </Link>
//         })}
//        </ul>
//      </section>
// }



"use client";

import { useState } from "react";
import { BookUser, SquarePen, Table2, PenLine } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const links = [
        {
            name: 'Dashboard',
            link: '/admin',
            icon: <BookUser />,
        },
        {
            name: 'Posts',
            link: '/admin/posts',
            icon: <SquarePen />,
        },
        {
            name: 'Categories',
            link: '/admin/categories',
            icon: <Table2 />,
        },
        {
            name: 'Authors',
            link: '/admin/authors',
            icon: <PenLine />,
        },
    ];

    return (
        <div>
            {/* Button to toggle sidebar */}
            <button 
                onClick={toggleSidebar} 
                className=" fixed top-4 left-1.5 z-50 md:hidden text-gray-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>

            {/* Sidebar */}
            <aside className={`fixed top-0 left-0 w-64 h-full bg-white border-r p-6 md:relative md:w-[200px] md:border-r md:h-auto md:shadow-none transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                <ul className="flex flex-col gap-7">
                    {links.map((item) => (
                        <li key={item.link} className="flex gap-3 items-center font-bold bg-blue-50 rounded-full px-5 py-2">
                            <Link href={item.link} className="flex items-center gap-3">
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
}
