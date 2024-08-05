// import { getAllCategories } from "@/lib/firebase/category/read_server"
// import Link from "next/link";

// export default async function Page(){
//     const categories = await getAllCategories();
//     return <main className="p-10">
//         <section className="grid grid-cols-5">
//         {categories?.map((category,key)=>{
//         return <CategoryCard category={category} key={key}/>
//         })}
//         </section>
//     </main>
// }

// function CategoryCard({category}){
//     return<Link href={`/categories/${category?.id}`} >
//      <div className="flex flex-col items-center justify-center gap-2 hover:bg-blue-100 rounded-xl p-6">
//         <img className="h-28 w-28 rounded-full object-cover" src={category?.iconURL}/>
//         <h1 className="font-bold">{category?.name}</h1>
//     </div>
// </Link>
// }


import { getAllCategories } from "@/lib/firebase/category/read_server";
import Link from "next/link";

export default async function Page() {
    const categories = await getAllCategories();
    return (
        <main className="p-4 sm:p-6 md:p-10">
            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {categories?.map((category, key) => (
                    <CategoryCard category={category} key={key} />
                ))}
            </section>
        </main>
    );
}

function CategoryCard({ category }) {
    return (
        <Link href={`/categories/${category?.id}`}>
            <div className="flex flex-col items-center justify-center gap-2 hover:bg-blue-100 rounded-xl p-4 sm:p-6">
                <img className="h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover" src={category?.iconURL} alt={category?.name} />
                <h1 className="font-bold text-sm sm:text-base">{category?.name}</h1>
            </div>
        </Link>
    );
}
