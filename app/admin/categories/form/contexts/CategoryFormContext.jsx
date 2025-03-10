//
'use client';
import { createContext, useContext, useState } from "react";
import { createNewCategory, deleteCategory, updateCategory } from "@/lib/firebase/category/write";
import { useRouter } from "next/navigation";
import { getCategory } from "@/lib/firebase/category/read";

const CategoryFormContext = createContext()

export default function CategoryFormContextProvider({children}){

    //router to throw user back to category after delete 
      const router = useRouter();
        const [data, setData] = useState({});
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState(null);
        const [isDone, setIsDone] = useState(false);
        const [image, setImage]= useState(null);
        //take key value and put in data
        const handleData =(key,value)=>{
            setIsDone(false)
            setData({
                ...data,
                [key]: value,
            })
        }

        const handleCreate = async ()=>{
            setError(null)
            setIsLoading(true)
            setIsDone(false)
            try {
                //add data to firebase 
                // add image to storage
                await createNewCategory({data :data, image: image})
                setIsDone(true)
            } catch (error) {
                setError(error?.message)
            }
            setIsLoading(false)
        }

        const handleUpdate = async ()=>{
            setError(null)
            setIsLoading(true)
            setIsDone(false)
            try {
               
                await updateCategory({data :data, image: image})
                setIsDone(true)
            } catch (error) {
                setError(error?.message)
            }
            setIsLoading(false)
        }

        const handleDelete = async (id)=>{
            setError(null)
            setIsLoading(true)
            setIsDone(false)
            try {
               
                await deleteCategory(id)
                setIsDone(true)
                // push back
                router.push(`/admin/categories`)
            } catch (error) {
                setError(error?.message)
            }
            setIsLoading(false)
        }
        
        const fetchData = async (id) =>{
            setError(null)
            setIsLoading(true)
            setIsDone(false)
            try {
                const res = await getCategory(id)
                if(res.exists()){
                    setData(res.data())
                }
            else{
                throw new Error(`No category found from ${id}!!`)
            }
            } catch (error) {
                setError(error?.message)
            }
            setIsLoading(false)
        }

        return <CategoryFormContext.Provider
        value={{
            data,
            error,
            isLoading,
            isDone,
            handleData,
            handleCreate,
            handleUpdate,
            handleDelete,
            updateCategory,
            image,
            setImage,
            fetchData,
        }}
        >
       
        {children}
    </CategoryFormContext.Provider>
}

export const useCategoryForm = () => useContext(CategoryFormContext);