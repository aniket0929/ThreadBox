//
'use client';
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { getPost } from "@/lib/firebase/posts/read";
import { createNewPost, deletePost, updatePost } from "@/lib/firebase/posts/write";

const PostFormContext = createContext()

export default function PostFormContextProvider({children}){

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
                await createNewPost({data :data, image: image})
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
               
                await updatePost({data :data, image: image})
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
               
                await deletePost(id)
                setIsDone(true)
                // push back
                router.push(`/admin/posts`)
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
                const res = await getPost(id)
                if(res.exists()){
                    setData(res.data())
                }
            else{
                throw new Error(`No post found from ${id}!!`)
            }
            } catch (error) {
                setError(error?.message)
            }
            setIsLoading(false)
        }

        return <PostFormContext.Provider
        value={{
            data,
            error,
            isLoading,
            isDone,
            handleData,
            handleCreate,
            handleUpdate,
            handleDelete,
            updatePost,
            image,
            setImage,
            fetchData,
        }}
        >
       
        {children}
    </PostFormContext.Provider>
}

export const usePostForm = () => useContext(PostFormContext);