// "use client"

// import { useCategories } from "@/lib/firebase/category/read"
// import Link from "next/link";

// export default function CategoriesListView(){
//     const {data, error, isLoading}= useCategories();
//     if(isLoading) {
//         return <h1>Loading...</h1>
//     }
//     if(error) {
//         return <h1>{error}</h1>
//     }
//     if(!data) {return <h1>Data not found.</h1>
//     }

//     return <section>
//         <table className="w-full">
//             <thead>
//                 <tr>
//                     <th className="border px-4 py-2 " >Sr No</th>
//                     <th className="border px-4 py-2 ">Image</th>
//                     <th className="border px-4 py-2 ">Name</th>
//                     <th className="border px-4 py-2 ">Slug</th>
//                     <th className="border px-4 py-2 ">Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {data?.map((item,key)=>{
//             return <tr>
//                 <td className="border px-4 py-2 ">{key + 1}</td>
//                 <td className="border px-4 py-2 "> <img className="h-10 w-10 " src={item?.iconURL}/> </td>
//                 <td className="border px-4 py-2 ">{item?.name}</td>
//                 <td className="border px-4 py-2 ">{item?.slug}</td>

//                 <td className="border px-4 py-2 ">
//                     <Link href={`/admin/categories/form?id=${item?.id}`}>
//                     <button className="bg-blue-500 rounded-full px-3 py-1 text-white text-sm" > Action</button> 
//                     </Link>
//                     </td> 
//             </tr>
//         })}
//             </tbody>
//         </table>
//     </section>
// }



"use client"

import { useCategories } from "@/lib/firebase/category/read"
import Link from "next/link";

export default function CategoriesListView() {
    const { data, error, isLoading } = useCategories();

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    if (!data) {
        return <h1>Data not found.</h1>
    }

    return (
        <section>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border px-4 py-2 text-left">Image</th>
                            <th className="border px-4 py-2 text-left">Name</th>
                            <th className="border px-4 py-2 text-left hidden md:table-cell">Slug</th>
                            <th className="border px-4 py-2 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item) => (
                            <tr key={item?.id} className="hover:bg-gray-50">
                                <td className="border px-4 py-2">
                                    <img className="h-10 w-10 object-cover" src={item?.iconURL} alt={item?.name} />
                                </td>
                                <td className="border px-4 py-2">{item?.name}</td>
                                <td className="border px-4 py-2 hidden md:table-cell">{item?.slug}</td>
                                <td className="border px-4 py-2">
                                    <Link href={`/admin/categories/form?id=${item?.id}`}>
                                        <button className="bg-blue-500 rounded-full px-3 py-1 text-white text-sm">
                                            Action
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
