import { getAuthor } from "@/lib/firebase/author/read_server";
import { getCategory } from "@/lib/firebase/category/read_server";
import { getPost } from "@/lib/firebase/posts/read_server";


export async function generateMetadata({ params }) {
    const { postId } = params;
    const post = await getPost(postId)

    return {
        title: post?.title,
        openGraph: {
            images: [post?.imageURL],
        },
    }
}

export default async function Page({params}){
    // server side fetvh karay sathi asa kela 
    const  {postId}= params;
    const post =await getPost(postId)

    return <main className="flex justify-center">
       <section className="px-16 py-10 flex flex-col gap-5 max-w-[800px]">
       < CategoryCard categoryId={post?.categoryId}/>
        <h1 className="text-3xl font-bold">{post?.title}</h1>
        <img className="w-full object-cover" src={post?.imageURL}/>
      <div className="flex justify-between items-center">
      <AuthorCard authorId={post?.authorId}/>
      <h5 className="text-sm text-gray-500">{post?.timestamp?.toDate()?.toLocaleDateString()}</h5>
      </div>
        <div dangerouslySetInnerHTML={{__html: post?.content}}></div>
       </section>
    </main>
}

async function AuthorCard({authorId}){
    const author = await getAuthor(authorId);
    return <div className="flex gap-2 items-center">
        <img className="h-6 w-6 rounded-full object-cover" src={author?.photoURL}/>
        <h4 className="text-sm text-gray-500">{author?.name}</h4>
    </div>
}

async function CategoryCard({categoryId}){
    const category = await getCategory(categoryId);
    return <div className="flex">
        <div className="flex gap-2 items-center bg-white bg-opacity-60 px-2 py-1 rounded-full border">
        <img className="h-4 w-4 rounded-full object-cover" src={category?.iconURL}/>
        <h4 className="text-xs text-gray-500">{category?.name}</h4>
    </div>
    </div>
}