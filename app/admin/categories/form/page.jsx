// 'use client'
// import { Heading3 } from "lucide-react";
// import { useCategoryForm } from "./contexts/CategoryFormContext";
// import { useSearchParams } from "next/navigation";
// import { useEffect } from "react";

// export default function Page(){
//     const searchParams= useSearchParams();
//     const updateCategoryId= searchParams.get(`id`);

//     useEffect(()=>{
//         if(updateCategoryId){
//             fetchData(updateCategoryId)
//         }
//     },[updateCategoryId])
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
//     }= useCategoryForm();

//     return <main className="w-full p-6 flex flex-col gap-3">

//         <div className="flex gap-5 items-center">
//         <h1 className="font-bold">categories | form</h1>
//         {updateCategoryId && <div className="flex">
//            <h3 className="text-white bg-orange-500 rounded-full px-4 py-2 text-xs">Update</h3></div>}

//            {!updateCategoryId && <div className="flex">
//             <h3 className="text-white bg-green-500 rounded-full px-4 py-2 text-xs">Create</h3></div>}
//         </div>


//         <section className="flex">
//         <form action="" 
//         //
//         onSubmit={(e)=>{
//             e.preventDefault();
//             if(updateCategoryId){
//                 handleUpdate();
//             }
//             else{
//                 handleCreate();
//             }
           
//         }}
//         className="flex flex-col gap-2 bg-blue-50 p-7 rounded-xl">
//            <div className="flex flex-col gap-2">
//            <label htmlFor="" className="text-sm text-gray-500">Category name <span className="text-red-500 ">*</span> </label>
//             <input
//             className="px-4 py-2 rounded-full border bg-gray-50"
//             placeholder="Enter Category Name "
//             type="text"
//             onChange={(e)=>{
//                 handleData('name', e.target.value)
//             }}
//             value={data?.name}
//             required />
  
//            </div>
//            <div className="flex flex-col gap-2">
//            <label htmlFor="" className="text-sm text-gray-500">Category slug <span className="text-red-500 ">*</span> </label>
//             <input
//             className="px-4 py-2 rounded-full border bg-gray-50"
//             placeholder="Enter Category Slug "
//             type="text"
//             onChange={(e)=>{
//                 handleData('slug', e.target.value)
//             }}
//             value={data?.slug}
//             required  />
//            </div>

//             {/* explainnn */}
//             {data?.iconURL && <div>
//                 <img className="h-44" src={data?.iconURL} alt="" />
//                 </div>}
//             {image && <div>
//                 <img className="h-44" src={URL.createObjectURL(image)} alt="" />
//                 </div>}

//            <div className="flex flex-col gap-2">
//            <label htmlFor="" className="text-sm text-gray-500"> Image  </label>
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
//             {isLoading? "Loading.." : updateCategoryId? "Update":"Create"}
//              </button>}
            
//             {/* //delete category / */}
//             {updateCategoryId && !isDone && 
//            <button
//            onClick={(e)=>{
//             e.preventDefault();
//             handleDelete(updateCategoryId);
//            }}
//            disabled={isLoading || isDone}
//             className="bg-red-500 rounded-full px4 py-2 text-white"
//            >
//             {isLoading? "Loading.." : "Delete"}
//              </button>}

//              {isDone && 
//              <h3 className="text-blue-500 font-bold">Succesfully {updateCategoryId? "Updated":"Created"} </h3>}
//            </form>
//         </section>
//     </main>
// }


'use client'
import { Heading3 } from "lucide-react";
import { useCategoryForm } from "./contexts/CategoryFormContext";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Page(){
    const searchParams = useSearchParams();
    const updateCategoryId = searchParams.get('id');

    useEffect(() => {
        if (updateCategoryId) {
            fetchData(updateCategoryId);
        }
    }, [updateCategoryId]);

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
    } = useCategoryForm();

    return (
        <main className="w-full p-4 md:p-6 flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
                <h1 className="font-bold text-lg md:text-xl">Categories | Form</h1>
                <div className="flex">
                    {updateCategoryId ? (
                        <h3 className="text-white bg-orange-500 rounded-full px-3 py-1 text-xs md:text-sm">Update</h3>
                    ) : (
                        <h3 className="text-white bg-green-500 rounded-full px-3 py-1 text-xs md:text-sm">Create</h3>
                    )}
                </div>
            </div>

            <section>
                <form 
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (updateCategoryId) {
                            handleUpdate();
                        } else {
                            handleCreate();
                        }
                    }}
                    className="flex flex-col gap-4 bg-blue-50 p-4 md:p-6 rounded-xl"
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm text-gray-500">Category name <span className="text-red-500">*</span></label>
                        <input
                            id="name"
                            className="px-4 py-2 rounded-full border bg-gray-50"
                            placeholder="Enter Category Name"
                            type="text"
                            onChange={(e) => handleData('name', e.target.value)}
                            value={data?.name}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="slug" className="text-sm text-gray-500">Category slug <span className="text-red-500">*</span></label>
                        <input
                            id="slug"
                            className="px-4 py-2 rounded-full border bg-gray-50"
                            placeholder="Enter Category Slug"
                            type="text"
                            onChange={(e) => handleData('slug', e.target.value)}
                            value={data?.slug}
                            required
                        />
                    </div>

                    {/* Image Display */}
                    <div className="flex flex-col gap-2">
                        {data?.iconURL && (
                            <img className="h-32 md:h-44 object-cover" src={data?.iconURL} alt="Category Icon" />
                        )}
                        {image && (
                            <img className="h-32 md:h-44 object-cover" src={URL.createObjectURL(image)} alt="Selected Image" />
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="image" className="text-sm text-gray-500">Image</label>
                        <input
                            id="image"
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

                    <div className="flex flex-col md:flex-row gap-2">
                        <button
                            type="submit"
                            disabled={isLoading || isDone}
                            className="bg-blue-500 rounded-full px-4 py-2 text-white"
                        >
                            {isLoading ? "Loading..." : updateCategoryId ? "Update" : "Create"}
                        </button>

                        {updateCategoryId && !isDone && (
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleDelete(updateCategoryId);
                                }}
                                disabled={isLoading || isDone}
                                className="bg-red-500 rounded-full px-4 py-2 text-white"
                            >
                                {isLoading ? "Loading..." : "Delete"}
                            </button>
                        )}
                    </div>

                    {isDone && (
                        <h3 className="text-blue-500 font-bold">
                            Successfully {updateCategoryId ? "Updated" : "Created"}
                        </h3>
                    )}
                </form>
            </section>
        </main>
    );
}
