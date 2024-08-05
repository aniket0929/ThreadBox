 import { CirclePlus } from "lucide-react";
 import Link from "next/link";
 import CategoriesListView from "./components/CategoriesListView";

 export default function page(){
     return <main className="p-6 w-full flex-col gap-6">
        <div className="flex justify-between items-center">
         <h1 className="font-bold">
                 Categories
             </h1>
             <Link href="/admin/categories/form">
             <button className="flex gap-2 items-center bg-blue-500 px-4 py-2 text-white rounded-full font-bold">
             <CirclePlus />
                 Add
             </button>
             </Link>
        </div>
        <CategoriesListView/>
     </main>
 }




// import { CirclePlus } from 'lucide-react';
// import Link from 'next/link';
// import CategoriesListView from './components/CategoriesListView';

// export default function Page() {
//     return (
//         <main className="p-4 md:p-6 w-full flex flex-col gap-4 md:gap-6">
//             <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
//                 <h1 className="font-bold text-xl md:text-2xl">Categories</h1>
//                 <Link href="/admin/categories/form">
//                     <button className="flex items-center gap-2 bg-blue-500 px-4 py-2 text-white rounded-full font-bold text-sm md:text-base">
//                         <CirclePlus />
//                         Add
//                     </button>
//                 </Link>
//             </div>
//             <CategoriesListView />
//         </main>
//     );
// }
