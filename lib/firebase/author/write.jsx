//sagle database madhe krnre writr oppss ithe 

import { db, storage } from "@/lib/firebase";
import { Timestamp,collection,deleteDoc,doc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

// create category
export const createNewAuthor = async ({data,image})=>{
    if(!data?.name){
        throw new Error("name is undefined");
    }
    
    if(!image){
        throw new Error("image is undefined");
    }
    //folder to save images 

    //firebase new id dega
    const id = doc(collection(db, 'ids')).id;

    const imageRef= ref(storage, `authors/${id}`)
    await uploadBytes(imageRef, image )
    const imageURL = await getDownloadURL(imageRef);

    const firestoreRef = doc(db, `authors/${id}`);
    await setDoc(firestoreRef, {
        ...data,
        id: id,
        photoURL: imageURL,
        timestamp: Timestamp.now(),
    });
};

//update cstegory
export const updateAuthor = async ({data,image})=>{
    if(!data?.name){
        throw new Error("name is undefined");
    }
   

    var imageURL = data?.photoURL;
    if(image){
        const imageRef= ref(storage, `authors/${data?.id}`)
        await uploadBytes(imageRef, image )
        const imageURL = await getDownloadURL(imageRef);
    }
    //folder to save images 
   

    const firestoreRef = doc(db, `authors/${data.id}`);
    await updateDoc(firestoreRef, {
        ...data,
        photoURL: imageURL,
        timestamp: Timestamp.now(),
    });
};

export const deleteAuthor = async(id)=>{
    if(!id){
        throw new Error ("Id is required!")
    }
    await deleteDoc(doc(db, `authors/${id}`))
}
