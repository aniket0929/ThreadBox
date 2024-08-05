// 'use client'
// import { Heading3 } from "lucide-react";
// import { useSearchParams } from "next/navigation";
// import { useEffect } from "react";
// import { useAuthorForm } from "./contexts/AuthorFormContext";

// export default function Page(){
//     const searchParams= useSearchParams();
//     const updateAuthorId= searchParams.get(`id`);

//     useEffect(()=>{
//         if(updateAuthorId){
//             fetchData(updateAuthorId)
//         }
//     },[updateAuthorId])
//     const {
//         data,
//         error,
//         isLoading,
//         isDone,
//         handleData,
//         handleCreate,
//         handleUpdate,
//         handleDelete,
//         image,
//         setImage,
//         fetchData,
//     }= useAuthorForm();

//     return <main className="w-full p-6 flex flex-col gap-3">

//         <div className="flex gap-5 items-center">
//         <h1 className="font-bold">Authors | form</h1>
//         {updateAuthorId && <div className="flex">
//            <h3 className="text-white bg-orange-500 rounded-full px-4 py-2 text-xs">Update</h3></div>}

//            {!updateAuthorId && <div className="flex">
//             <h3 className="text-white bg-green-500 rounded-full px-4 py-2 text-xs">Create</h3></div>}
//         </div>


//         <section className="flex">
//         <form action="" 
//         //
//         onSubmit={(e)=>{
//             e.preventDefault();
//             if(updateAuthorId){
//                 handleUpdate();
//             }
//             else{
//                 handleCreate();
//             }
           
//         }}
//         className="flex flex-col gap-2 bg-blue-50 p-7 rounded-xl">
//            <div className="flex flex-col gap-2">
//            <label htmlFor="" className="text-sm text-gray-500">Author name <span className="text-red-500 ">*</span> </label>
//             <input
//             className="px-4 py-2 rounded-full border bg-gray-50"
//             placeholder="Enter Author Name "
//             type="text"
//             onChange={(e)=>{
//                 handleData('name', e.target.value)
//             }}
//             value={data?.name}
//             required />
  
//            </div>
//            <div className="flex flex-col gap-2">
//            <label htmlFor="" className="text-sm text-gray-500">Author Email <span className="text-red-500 ">*</span> </label>
//             <input
//             className="px-4 py-2 rounded-full border bg-gray-50"
//             placeholder="Enter Author Email "
//             type="email"
//             onChange={(e)=>{
//                 handleData('email', e.target.value)
//             }}
//             value={data?.email}
//             required  />
//            </div>

//             {/* explainnn */}
//             {data?.photoURL && <div>
//                 <img className="h-44" src={data?.photoURL} alt="" />
//                 </div>}
//             {image && <div>
//                 <img className="h-44" src={URL.createObjectURL(image)} alt="" />
//                 </div>}

//            <div className="flex flex-col gap-2">
//            <label htmlFor="" className="text-sm text-gray-500"> Photo  </label>
//             <input
//             className="px-4 py-2 rounded-full border bg-gray-50"
//             placeholder="Add Image "
//             type="file"
//             accept="image/*"
//             onChange={(e)=>{
//                 e.preventDefault()
//                 setImage(e.target.files[0])
//             }}
//              />
  
//            </div>

//            {error && <p className=" text-red-500"> {error}</p>}

//           {!isDone && 
//            <button
//            type="submit"
//            disabled={isLoading || isDone}
//             className="bg-blue-500 rounded-full px4 py-2 text-white"
//            >
//             {isLoading? "Loading.." : updateAuthorId? "Update":"Create"}
//              </button>}
            
//             {/* //delete Author / */}
//             {updateAuthorId && !isDone && 
//            <button
//            onClick={(e)=>{
//             e.preventDefault();
//             handleDelete(updateAuthorId);
//            }}
//            disabled={isLoading || isDone}
//             className="bg-red-500 rounded-full px4 py-2 text-white"
//            >
//             {isLoading? "Loading.." : "Delete"}
//              </button>}

//              {isDone && 
//              <h3 className="text-blue-500 font-bold">Succesfully {updateAuthorId? "Updated":"Created"} </h3>}
//            </form>
//         </section>
//     </main>
// }

'use client'
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useAuthorForm } from "./contexts/AuthorFormContext";

export default function Page(){
    const searchParams = useSearchParams();
    const updateAuthorId = searchParams.get('id');

    useEffect(() => {
        if (updateAuthorId) {
            fetchData(updateAuthorId);
        }
    }, [updateAuthorId]);

    const {
        data,
        error,
        isLoading,
        isDone,
        handleData,
        handleCreate,
        handleUpdate,
        handleDelete,
        image,
        setImage,
        fetchData,
    } = useAuthorForm();

    return (
        <main className="w-full p-4 md:p-6 flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
                <h1 className="text-xl font-bold">Authors | Form</h1>
                <div className={`flex ${updateAuthorId ? 'bg-orange-500' : 'bg-green-500'} rounded-full px-4 py-2 text-white text-xs md:text-sm`}>
                    {updateAuthorId ? 'Update' : 'Create'}
                </div>
            </div>

            <section>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (updateAuthorId) {
                            handleUpdate();
                        } else {
                            handleCreate();
                        }
                    }}
                    className="flex flex-col gap-4 bg-blue-50 p-6 rounded-xl"
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm text-gray-500">
                            Author Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="name"
                            className="px-4 py-2 rounded-full border bg-gray-50"
                            placeholder="Enter Author Name"
                            type="text"
                            onChange={(e) => handleData('name', e.target.value)}
                            value={data?.name}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm text-gray-500">
                            Author Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="email"
                            className="px-4 py-2 rounded-full border bg-gray-50"
                            placeholder="Enter Author Email"
                            type="email"
                            onChange={(e) => handleData('email', e.target.value)}
                            value={data?.email}
                            required
                        />
                    </div>

                    {data?.photoURL && (
                        <div className="flex justify-center">
                            <img className="h-32 w-auto object-cover" src={data?.photoURL} alt="Author Photo" />
                        </div>
                    )}
                    {image && (
                        <div className="flex justify-center">
                            <img className="h-32 w-auto object-cover" src={URL.createObjectURL(image)} alt="Selected Photo" />
                        </div>
                    )}

                    <div className="flex flex-col gap-2">
                        <label htmlFor="photo" className="text-sm text-gray-500">
                            Photo
                        </label>
                        <input
                            id="photo"
                            className="px-4 py-2 rounded-full border bg-gray-50"
                            placeholder="Add Image"
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                e.preventDefault();
                                setImage(e.target.files[0]);
                            }}
                        />
                    </div>

                    {error && <p className="text-red-500">{error}</p>}

                    {!isDone && (
                        <button
                            type="submit"
                            disabled={isLoading || isDone}
                            className="bg-blue-500 rounded-full px-4 py-2 text-white"
                        >
                            {isLoading ? "Loading.." : updateAuthorId ? "Update" : "Create"}
                        </button>
                    )}

                    {updateAuthorId && !isDone && (
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                handleDelete(updateAuthorId);
                            }}
                            disabled={isLoading || isDone}
                            className="bg-red-500 rounded-full px-4 py-2 text-white"
                        >
                            {isLoading ? "Loading.." : "Delete"}
                        </button>
                    )}

                    {isDone && (
                        <h3 className="text-blue-500 font-bold">
                            Successfully {updateAuthorId ? "Updated" : "Created"}
                        </h3>
                    )}
                </form>
            </section>
        </main>
    );
}
