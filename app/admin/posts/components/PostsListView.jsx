"use client"

import { usePosts } from "@/lib/firebase/posts/read";
import Link from "next/link";

export default function PostsListView(){
    const {data, error, isLoading}= usePosts();
    if(isLoading) {
        return <h1>Loading...</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }
    if(!data) {return <h1>Data not found.</h1>
    }

    return <section>
        <table className="w-full">
            <thead>
                <tr>
                    <th className="border px-4 py-2 " >Sr No</th>
                    <th className="border px-4 py-2 ">Image</th>
                    <th className="border px-4 py-2 ">Title</th>
                    <th className="border px-4 py-2 ">Slug</th>
                    <th className="border px-4 py-2 ">Action</th>
                </tr>
            </thead>
            <tbody>
            {data?.map((item,key)=>{
            return <tr>
                <td className="border px-4 py-2 ">{key + 1}</td>
                <td className="border px-4 py-2 "> <img className="h-10 w-10 " src={item?.imageURL}/> </td>
                <td className="border px-4 py-2 ">{item?.title}</td>
                <td className="border px-4 py-2 ">{item?.slug}</td>

                <td className="border px-4 py-2 ">
                    <Link href={`/admin/posts/form?id=${item?.id}`}>
                    <button className="bg-blue-500 rounded-full px-3 py-1 text-white text-sm" > Action</button> 
                    </Link>
                    </td> 
            </tr>
        })}
            </tbody>
        </table>
    </section>
}