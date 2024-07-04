'use client'
import { Heading3 } from "lucide-react";
import { useCategoryForm } from "./contexts/CategoryFormContext";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Page(){
    const searchParams= useSearchParams();
    const updateCategoryId= searchParams.get(`id`);

    useEffect(()=>{
        if(updateCategoryId){
            fetchData(updateCategoryId)
        }
    },[updateCategoryId])
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
    }= useCategoryForm();

    return <main className="w-full p-6 flex flex-col gap-3">

        <div className="flex gap-5 items-center">
        <h1 className="font-bold">categories | form</h1>
        {updateCategoryId && <div className="flex">
           <h3 className="text-white bg-orange-500 rounded-full px-4 py-2 text-xs">Update</h3></div>}

           {!updateCategoryId && <div className="flex">
            <h3 className="text-white bg-green-500 rounded-full px-4 py-2 text-xs">Create</h3></div>}
        </div>


        <section className="flex">
        <form action="" 
        //
        onSubmit={(e)=>{
            e.preventDefault();
            if(updateCategoryId){
                handleUpdate();
            }
            else{
                handleCreate();
            }
           
        }}
        className="flex flex-col gap-2 bg-blue-50 p-7 rounded-xl">
           <div className="flex flex-col gap-2">
           <label htmlFor="" className="text-sm text-gray-500">Category name <span className="text-red-500 ">*</span> </label>
            <input
            className="px-4 py-2 rounded-full border bg-gray-50"
            placeholder="Enter Category Name "
            type="text"
            onChange={(e)=>{
                handleData('name', e.target.value)
            }}
            value={data?.name}
            required />
  
           </div>
           <div className="flex flex-col gap-2">
           <label htmlFor="" className="text-sm text-gray-500">Category slug <span className="text-red-500 ">*</span> </label>
            <input
            className="px-4 py-2 rounded-full border bg-gray-50"
            placeholder="Enter Category Slug "
            type="text"
            onChange={(e)=>{
                handleData('slug', e.target.value)
            }}
            value={data?.slug}
            required  />
           </div>

            {/* explainnn */}
            {data?.iconURL && <div>
                <img className="h-44" src={data?.iconURL} alt="" />
                </div>}
            {image && <div>
                <img className="h-44" src={URL.createObjectURL(image)} alt="" />
                </div>}

           <div className="flex flex-col gap-2">
           <label htmlFor="" className="text-sm text-gray-500"> Image  </label>
            <input
            className="px-4 py-2 rounded-full border bg-gray-50"
            placeholder="Add Image "
            type="file"
            accept="image/*"
            onChange={(e)=>{
                e.preventDefault()
                setImage(e.target.files[0])
            }}
             />
  
           </div>

           {error && <p className=" text-red-500"> {error}</p>}

          {!isDone && 
           <button
           type="submit"
           disabled={isLoading || isDone}
            className="bg-blue-500 rounded-full px4 py-2 text-white"
           >
            {isLoading? "Loading.." : updateCategoryId? "Update":"Create"}
             </button>}
            
            {/* //delete category / */}
            {updateCategoryId && !isDone && 
           <button
           onClick={(e)=>{
            e.preventDefault();
            handleDelete(updateCategoryId);
           }}
           disabled={isLoading || isDone}
            className="bg-red-500 rounded-full px4 py-2 text-white"
           >
            {isLoading? "Loading.." : "Delete"}
             </button>}

             {isDone && 
             <h3 className="text-blue-500 font-bold">Succesfully {updateCategoryId? "Updated":"Created"} </h3>}
           </form>
        </section>
    </main>
}