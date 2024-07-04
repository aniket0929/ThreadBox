import { BookUser, SquarePen,Table2, PenLine} from "lucide-react"
import Link from "next/link"

export default function Sidebar(){

    const link =[
        {
            name : 'Dashboard',
            link: '/admin',
            icon: <BookUser />,
        },
        {
            name : 'posts',
            link: '/admin/posts',
            icon: <SquarePen />,
        },
        {
            name : 'categories',
            link: '/admin/categories',
            icon: <Table2 />,
        },
        {
            name : 'authors',
            link: '/admin/authors',
            icon: <PenLine />,
        },
        
    ]
    
     return <section className="w-[200px] border-r h-screen p-6">
       <ul className="w-full flex flex-col gap-7">
       {link.map((item)=>{
            return <Link href={item.link}>
             <li className="flex gap-3 items-center font-bold bg-blue-50 rounded-full px-5 py-2 ">
                {item.icon}
                <span className="">
                    {item.name}
                </span>
            </li>
            </Link>
        })}
       </ul>
     </section>
}