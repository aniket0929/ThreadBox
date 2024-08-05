// "use client"

// import { usePosts } from "@/lib/firebase/posts/read";
// import Link from "next/link";

// export default function PostsListView(){
//     const {data, error, isLoading}= usePosts();
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
//                     <th className="border px-4 py-2 ">Title</th>
//                     <th className="border px-4 py-2 ">Slug</th>
//                     <th className="border px-4 py-2 ">Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {data?.map((item,key)=>{
//             return <tr>
//                 <td className="border px-4 py-2 ">{key + 1}</td>
//                 <td className="border px-4 py-2 "> <img className="h-10 w-10 " src={item?.imageURL}/> </td>
//                 <td className="border px-4 py-2 ">{item?.title}</td>
//                 <td className="border px-4 py-2 ">{item?.slug}</td>

//                 <td className="border px-4 py-2 ">
//                     <Link href={`/admin/posts/form?id=${item?.id}`}>
//                     <button className="bg-blue-500 rounded-full px-3 py-1 text-white text-sm" > Action</button> 
//                     </Link>
//                     </td> 
//             </tr>
//         })}
//             </tbody>
//         </table>
//     </section>
// }


"use client";

import { usePosts } from "@/lib/firebase/posts/read";
import Link from "next/link";

export default function PostsListView() {
    const { data, error, isLoading } = usePosts();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    if (!data) {
        return <h1>Data not found.</h1>;
    }

    return (
        <section className="p-4 md:p-10">
            <div className="block md:hidden">
                {data.map((item, key) => (
                    <div key={item.id} className="mb-4 p-4 border rounded-md bg-white shadow-sm">
                        <div className="flex items-center mb-2">
                            <img className="h-16 w-16 object-cover rounded-full mr-4" src={item.imageURL} alt={item.title} />
                            <div>
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                                <p className="text-sm text-gray-500">{item.slug}</p>
                            </div>
                        </div>
                        <Link href={`/admin/posts/form?id=${item.id}`}>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">Action</button>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="hidden md:block">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Sr No</th>
                            <th className="border px-4 py-2">Image</th>
                            <th className="border px-4 py-2">Title</th>
                            <th className="border px-4 py-2">Slug</th>
                            <th className="border px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, key) => (
                            <tr key={item.id}>
                                <td className="border px-4 py-2">{key + 1}</td>
                                <td className="border px-4 py-2">
                                    <img className="h-10 w-10 object-cover" src={item.imageURL} alt={item.title} />
                                </td>
                                <td className="border px-4 py-2">{item.title}</td>
                                <td className="border px-4 py-2">{item.slug}</td>
                                <td className="border px-4 py-2">
                                    <Link href={`/admin/posts/form?id=${item.id}`}>
                                        <button className="bg-blue-500 rounded-full px-3 py-1 text-white text-sm">Action</button>
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
