// // 

// 'use client';
// import { useAuth } from "@/lib/contexts/AuthContext";
// import Link from "next/link";

// export default function LoginButton() {
//     const {
//         user,
//         isLoading,
//         error,
//         handleSignInWithGoogle,
//         handleLogout,
//     } = useAuth();

//     if (isLoading) {
//         return (
//             <div>
//                 <button 
//                     className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm md:text-base"
//                 >
//                     Loading...
//                 </button>
//             </div>
//         );
//     }

//     if (user) {
//         return (
//             <div className="flex items-center gap-4 flex-wrap">
//                 <button 
//                     className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm md:text-base"
//                     onClick={() => {
//                         handleLogout();
//                     }}
//                 >
//                     Logout
//                 </button>

//                 <Link href='/admin'>
//                     <div className="flex items-center gap-4 rounded-full px-3 py-2 bg-blue-100 flex-wrap">
//                         <img className="object-cover h-10 w-10 md:h-11 md:w-11 rounded-full" src={user?.photoURL} alt="User" />  
//                         <div className="text-sm md:text-base">
//                             <h1 className="font-bold">{user?.displayName}</h1>
//                             <h1 className="text-xs md:text-sm text-gray-500">{user?.email}</h1>
//                         </div>
//                     </div>
//                 </Link>
//             </div>
//         );
//     }

//     return (
//         <section>
//             <button 
//                 onClick={() => {
//                     handleSignInWithGoogle();
//                 }}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm md:text-base"
//             >
//                 Login
//             </button>
//         </section>
//     );
// }


'use client';
import { useState, useEffect } from 'react';
import { useAuth } from "@/lib/contexts/AuthContext";
import Link from "next/link";

export default function LoginButton() {
    const [showPopup, setShowPopup] = useState(false);
    const {
        user,
        isLoading,
        error,
        handleSignInWithGoogle,
        handleLogout,
    } = useAuth();

    useEffect(() => {
        console.log('showPopup:', showPopup);
    }, [showPopup]);

    if (isLoading) {
        return (
            <div>
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm md:text-base"
                >
                    Loading...
                </button>
            </div>
        );
    }

    if (user) {
        return (
            <div className="flex items-center gap-4 flex-wrap">
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm md:text-base"
                    onClick={() => {
                        handleLogout();
                    }}
                >
                    Logout
                </button>

                <Link href='/admin'>
                    <div className="flex items-center gap-4 rounded-full px-3 py-2 bg-blue-100 flex-wrap">
                        <img className="object-cover h-10 w-10 md:h-11 md:w-11 rounded-full" src={user?.photoURL} alt="User" />  
                        <div className="text-sm md:text-base">
                            <h1 className="font-bold">{user?.displayName}</h1>
                            <h1 className="text-xs md:text-sm text-gray-500">{user?.email}</h1>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }

    return (
        <section>
            <button 
                onClick={() => setShowPopup(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm md:text-base"
            >
                Login
            </button>

            {/* Mobile Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
                        <h2 className="text-xl font-bold mb-4">Login</h2>
                        <button
                            onClick={() => {
                                handleSignInWithGoogle();
                                setShowPopup(false);
                            }}
                            className="bg-blue-500 text-white px-4 py-2 rounded-full w-full"
                        >
                            Sign in with Google
                        </button>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="text-gray-500 mt-4 w-full text-center"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
