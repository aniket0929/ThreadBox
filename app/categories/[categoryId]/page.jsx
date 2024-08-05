// import { PostCard } from "@/app/components/PostListView";
// import { getCategory } from "@/lib/firebase/category/read_server";
// import { getAllPostsWithCategory } from "@/lib/firebase/posts/read_server";

// export default async function Page({ params }) {
//     const { categoryId} = params;
//     const posts = await getAllPostsWithCategory(categoryId)
//     return <main className="p-10">
//         <div className="flex p-5 gap-3">
//             <h1 className="font-bold">Categories /</h1>
//             <CategoryCard categoryId={categoryId} />
//         </div>
//         <div className="grid grid-cols-4 gap-5">
//             {posts?.map((post, key) => {
//                 return <PostCard post={post} key={key} />
//             })}
//         </div>
//     </main>
// }

// async function CategoryCard({categoryId}){
//     const category = await getCategory(categoryId);
//     return <div className="flex ">
//         <div className="flex gap-2 items-center bg-white bg-opacity-60 px-2 py-1 rounded-full border">
//         <img className="h-4 w-4 rounded-full object-cover" src={category?.iconURL}/>
//         <h4 className="text-xs text-gray-500">{category?.name}</h4>
//     </div>
//     </div>
// }

import { PostCard } from "@/app/components/PostListView";
import { getCategory } from "@/lib/firebase/category/read_server";
import { getAllPostsWithCategory } from "@/lib/firebase/posts/read_server";

export default async function Page({ params }) {
    const { categoryId } = params;
    const posts = await getAllPostsWithCategory(categoryId);

    return (
        <main className="p-4 sm:p-6 md:p-10">
            <div className="flex flex-col sm:flex-row items-center gap-3 p-4 mb-6">
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl">Categories /</h1>
                <CategoryCard categoryId={categoryId} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {posts?.map((post, key) => (
                    <PostCard post={post} key={key} />
                ))}
            </div>
        </main>
    );
}

async function CategoryCard({ categoryId }) {
    const category = await getCategory(categoryId);
    return (
        <div className="flex items-center bg-white bg-opacity-60 px-2 py-1 rounded-full border">
            <img className="h-4 w-4 rounded-full object-cover" src={category?.iconURL} alt={category?.name} />
            <h4 className="text-xs sm:text-sm text-gray-500 ml-2">{category?.name}</h4>
        </div>
    );
}



