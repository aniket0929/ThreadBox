//
'use client';
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { createNewAuthor, deleteAuthor, updateAuthor } from "../../../../../lib/firebase/author/write";
import { getAuthor } from "../../../../../lib/firebase/author/read";

const AuthorFormContext = createContext()

export default function AuthorFormContextProvider({children}){

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
                await createNewAuthor({data :data, image: image})
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
               
                await updateAuthor({data :data, image: image})
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
               
                await deleteAuthor(id)
                setIsDone(true)
                // push back
                router.push(`/admin/authors`)
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
                const res = await getAuthor(id)
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

        return <AuthorFormContext.Provider
        value={{
            data,
            error,
            isLoading,
            isDone,
            handleData,
            handleCreate,
            handleUpdate,
            handleDelete,
            updateAuthor,
            image,
            setImage,
            fetchData,
        }}
        >
        {children}
    </AuthorFormContext.Provider>
}

export const useAuthorForm = () => useContext(AuthorFormContext);