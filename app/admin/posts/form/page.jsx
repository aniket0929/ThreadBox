'use client'
import { Heading3 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { usePostForm } from "./contexts/PostFormContext";
import { useCategories } from "@/lib/firebase/category/read";
import { useAuthors } from "@/lib/firebase/author/read";
import { RTEField } from "./components/RTEField";

export default function Page(){
    const searchParams= useSearchParams();
    const updatePostId= searchParams.get(`id`);

    useEffect(()=>{
        if(updatePostId){
            fetchData(updatePostId)
        }
    },[updatePostId])
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
    }= usePostForm();

    return <main className="w-full p-6 flex flex-col gap-3">

        <div className="flex gap-5 items-center">
        <h1 className="font-bold"> Posts | form</h1>
        {updatePostId && <div className="flex">
           <h3 className="text-white bg-orange-500 rounded-full px-4 py-2 text-xs">Update</h3></div>}

           {!updatePostId && <div className="flex">
            <h3 className="text-white bg-green-500 rounded-full px-4 py-2 text-xs">Create</h3></div>}
        </div>


        <section className="flex">
        <form action="" 
        //
        onSubmit={(e)=>{
            e.preventDefault();
            if(updatePostId){
                handleUpdate();
            }
            else{
                handleCreate();
            }
           
        }}
        className="flex flex-col gap-2 bg-blue-50 p-7 rounded-xl">
           <div className="flex flex-col gap-2">
           <label htmlFor="" className="text-sm text-gray-500">Title<span className="text-red-500 ">*</span> </label>
            <input
            className="px-4 py-2 rounded-full border bg-gray-50"
            placeholder="Enter Title Name "
            type="text"
            onChange={(e)=>{
                handleData('title', e.target.value)
            }}
            value={data?.title}
            required />
  
           </div>
           <div className="flex flex-col gap-2">
           <label htmlFor="" className="text-sm text-gray-500">Post slug <span className="text-red-500 ">*</span> </label>
            <input
            className="px-4 py-2 rounded-full border bg-gray-50"
            placeholder="Enter Post Slug "
            type="text"
            //will ve disabled when update post id 
            disabled={updatePostId}
            onChange={(e)=>{
                handleData('slug', e.target.value)
            }}
            value={data?.slug}
            required  />
           </div>

           <SelectCategoryField/>
           <SelectAuthorField/>

            {/* explainnn */}
            {data?.imageURL && <div>
                <img className="h-44" src={data?.imageURL} alt="" />
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
            {isLoading? "Loading.." : updatePostId? "Update":"Create"}
             </button>}
            
            {/* //delete Post / */}
            {updatePostId && !isDone && 
           <button
           onClick={(e)=>{
            e.preventDefault();
            handleDelete(updatePostId);
           }}
           disabled={isLoading || isDone}
            className="bg-red-500 rounded-full px4 py-2 text-white"
           >
            {isLoading? "Loading.." : "Delete"}
             </button>}

             {isDone && 
             <h3 className="text-blue-500 font-bold">Succesfully {updatePostId? "Updated":"Created"} </h3>}
           </form>
           <RTEField/>
        </section>
    </main>
}

//select category
 function SelectCategoryField(){
    const {
        data,
        handleData,
    }= usePostForm();
    const {data : categories}= useCategories();
        return  <div className="flex flex-col gap-2">
           <label htmlFor="" className="text-sm text-gray-500"> Category <span className="text-red-500 ">*</span></label>
        <select 
        className="px-4 py-2 rounded-full border bg-gray-50"
        name="category" 
        id="category" 
        value={data?.categoryId}
        onChange={(e)=>{
            handleData('categoryId', e.target.value)
        }}
        required>
        <option value="">Select Category</option>
        {categories && categories?.map((item)=>{
            return <option 
            value={item?.id}>{item?.name}</option>
        })}
        </select>
    </div>
};

//select author

function SelectAuthorField(){
    const {
        data,
        handleData,
    }= usePostForm();
    const {data : authors}= useAuthors();
        return  <div className="flex flex-col gap-2">
           <label htmlFor="" className="text-sm text-gray-500"> Authors <span className="text-red-500 ">*</span></label>
        <select 
        className="px-4 py-2 rounded-full border bg-gray-50"
        name="author" 
        id="author" 
        value={data?.authorId}
        onChange={(e)=>{
            handleData('authorId', e.target.value)
        }}
        required>
        <option value="">Select Author</option>
        {authors && authors?.map((item)=>{
            return <option 
            value={item?.id}>{item?.name}</option>
        })}
        </select>
    </div>
};