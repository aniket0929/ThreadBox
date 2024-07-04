//sagle database madhe krnre writr oppss ithe 

import { db, storage } from "@/lib/firebase";
import { Timestamp,deleteDoc,doc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

// create category
export const createNewPost = async ({data,image})=>{
    if(!data?.title){
        throw new Error("name is undefined");
    }
    if(!data?.slug){
        throw new Error("slug is undefined");
    }
    if(!image){
        throw new Error("image is undefined");
    }
    //folder to save images 
    const imageRef= ref(storage, `posts/${data?.slug}`)
    await uploadBytes(imageRef, image )
    const imageURL = await getDownloadURL(imageRef);

    const firestoreRef = doc(db, `posts/${data.slug}`);
    await setDoc(firestoreRef, {
        ...data,
        id: data.slug,
       imageURL: imageURL,
        timestamp: Timestamp.now(),
    });
};

//update cstegory
export const updatePost= async ({data,image})=>{
    if(!data?.title){
        throw new Error("name is undefined");
    }
    if(!data?.slug){
        throw new Error("slug is undefined");
    }

    var imageURL = data?.imageURL;
    if(image){
        const imageRef= ref(storage, `posts/${data?.id}`)
        await uploadBytes(imageRef, image )
        const imageURL = await getDownloadURL(imageRef);
    }
    //folder to save images 
   

    const firestoreRef = doc(db, `posts/${data.slug}`);
    await updateDoc(firestoreRef, {
        ...data,
       imageURL: imageURL,
        timestamp: Timestamp.now(),
    });
};

export const deletePost = async(id)=>{
    if(!id){
        throw new Error ("Id is required!")
    }
    await deleteDoc(doc(db, `posts/${id}`))
}
