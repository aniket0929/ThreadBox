import { CirclePlus } from "lucide-react";
import Link from "next/link";
import PostsListView from "./components/PostsListView";

export default function page(){
    return <main className="p-6 w-full flex-col gap-6">
       <div className="flex justify-between items-center">
        <h1 className="font-bold">
                Posts
            </h1>
            <Link href="/admin/posts/form">
            <button className="flex gap-2 items-center bg-blue-500 px-4 py-2 text-white rounded-full font-bold">
            <CirclePlus />
                Add
            </button>
            </Link>
       </div>
       <PostsListView/>
    </main>
}

