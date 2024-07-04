//sagle database madhe krnre writr oppss ithe 

import { db, storage } from "@/lib/firebase";
import { Timestamp,deleteDoc,doc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

// create category
export const createNewCategory = async ({data,image})=>{
    if(!data?.name){
        throw new Error("name is undefined");
    }
    if(!data?.slug){
        throw new Error("slug is undefined");
    }
    if(!image){
        throw new Error("image is undefined");
    }
    //folder to save images 
    const imageRef= ref(storage, `categories/${data?.slug}`)
    await uploadBytes(imageRef, image )
    const imageURL = await getDownloadURL(imageRef);

    const firestoreRef = doc(db, `categories/${data.slug}`);
    await setDoc(firestoreRef, {
        ...data,
        id: data.slug,
        iconURL: imageURL,
        timestamp: Timestamp.now(),
    });
};

//update cstegory
export const updateCategory = async ({data,image})=>{
    if(!data?.name){
        throw new Error("name is undefined");
    }
    if(!data?.slug){
        throw new Error("slug is undefined");
    }

    var imageURL = data?.iconURL;
    if(image){
        const imageRef= ref(storage, `categories/${data?.id}`)
        await uploadBytes(imageRef, image )
        const imageURL = await getDownloadURL(imageRef);
    }
    //folder to save images 
   

    const firestoreRef = doc(db, `categories/${data.slug}`);
    await updateDoc(firestoreRef, {
        ...data,
        iconURL: imageURL,
        timestamp: Timestamp.now(),
    });
};

export const deleteCategory = async(id)=>{
    if(!id){
        throw new Error ("Id is required!")
    }
    await deleteDoc(doc(db, `categories/${id}`))
}
