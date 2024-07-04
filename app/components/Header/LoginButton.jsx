'use client';
import { useAuth } from "@/lib/contexts/AuthContext";
import Link from "next/link";


export default function LoginButton() {
    const {
        user,
        isLoading,
        error,
        handleSignInWithGoogle,
        handleLogout,
    } = useAuth();

    if(isLoading){
        return <div>
        <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
        >
         Loading...
        </button>
    </div>
    }

    if(user){
        return <div className="flex gap-4 items-center">
            <button 
                className="bg-blue-500 text-white px-4 py-2 rounded-full"
                onClick={()=>{
                    handleLogout();
                }}
            >
             Logout
            </button>

            <Link href='/admin'>
                <div className="flex gap-4 rounded-full px-3 py-2 bg-blue-100">
                <img className="object-cover h-11 w-11 rounded-full" src={user?.photoURL} alt="" />  
                <div>
                <h1
                className="font-bold"
                >{user?.displayName}</h1>
                <h1 
                className="text-sm text-gray-500"
                >{user?.email}</h1>
                </div>          
            
                </div>
            </Link>
           
        </div>
                    //console.log(user?.photoURL)

    }

    return (
        <section>
        <button 
            onClick={() => {
                handleSignInWithGoogle(); 
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
        >
            Login
        </button>
        </section>
       
    );
}
