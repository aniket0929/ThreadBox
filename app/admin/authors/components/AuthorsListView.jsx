// "use client"

// import { useAuthors } from "@/lib/firebase/author/read";
// import Link from "next/link";

// export default function AuthorsListView(){
//     const {data, error, isLoading}= useAuthors();
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
//                     <th className="border px-4 py-2 ">Photo</th>
//                     <th className="border px-4 py-2 ">Name</th>
//                     <th className="border px-4 py-2 ">Email</th>
//                     <th className="border px-4 py-2 ">Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {data?.map((item,key)=>{
//             return <tr>
//                 <td className="border px-4 py-2 ">{key + 1}</td>
//                 <td className="border px-4 py-2 "> <img className="h-10 w-10 " src={item?.photoURL}/> </td>
//                 <td className="border px-4 py-2 ">{item?.name}</td>
//                 <td className="border px-4 py-2 ">{item?.email}</td>

//                 <td className="border px-4 py-2 ">
//                     <Link href={`/admin/authors/form?id=${item?.id}`}>
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

import { useAuthors } from "@/lib/firebase/author/read";
import Link from "next/link";

export default function AuthorsListView(){
    const {data, error, isLoading} = useAuthors();

    if(isLoading) {
        return <h1>Loading...</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }
    if(!data) {
        return <h1>Data not found.</h1>
    }

    return (
        <section>
            <div className="overflow-x-auto pt-4">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border px-2 py-1 text-left text-sm md:text-base">Photo</th>
                            <th className="border px-2 py-1 text-left text-sm md:text-base">Name</th>
                            <th className="border px-2 py-1 text-left text-sm md:text-base hidden lg:table-cell">Email</th>
                            <th className="border px-2 py-1 text-left text-sm md:text-base">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item) => (
                            <tr key={item?.id} className="hover:bg-gray-50">
                                <td className="border px-2 py-1">
                                    <img className="h-8 w-8 md:h-10 md:w-10 object-cover" src={item?.photoURL} alt={item?.name} />
                                </td>
                                <td className="border px-2 py-1 text-sm md:text-base">{item?.name}</td>
                                <td className="border px-2 py-1 text-sm md:text-base hidden lg:table-cell">{item?.email}</td>
                                <td className="border px-2 py-1">
                                    <Link href={`/admin/authors/form?id=${item?.id}`}>
                                        <button className="bg-blue-500 rounded-full px-2 py-1 text-white text-xs md:text-sm">
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
