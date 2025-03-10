//sagle database madhe krnre read oppss ithe 

'use client'

import { db } from '@/lib/firebase';
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore'
import useSWRSubscription from 'swr/subscription'
 
export function usePosts() {
  const { data, error } = useSWRSubscription(['posts'], ([path], { next }) => {
    const ref = collection( db, path);

    const unsub =onSnapshot(ref,(snaps)=>{
      next(null, snaps.docs.map((v)=> v.data())) 
    }, (error)=>{
      next(error?.message)
    })
    return () => unsub();
  })
 
  return {
    data,
    error,
    //swr isloading det nai so how do we know load ho raha hai ya nai
    isLoading: data === undefined ? true : false,
  }
}

export const getPost = async (id)=>{
  return await getDoc(doc(db , `posts/${id}`))
}