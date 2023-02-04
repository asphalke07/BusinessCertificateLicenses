import { useRouter } from 'next/router'
import React,{useState,useEffect} from 'react'
import {db} from "../../../../firebase-config";
import {getDocs,collection} from "@firebase/firestore"

function Email() {
    const router=useRouter();
    const [business,setBusiness] =useState([]);
    const userCollectionRef=collection(db,"business");
    useEffect(()=>{
        const getUsers=async()=>{
          const data = await getDocs(userCollectionRef);
          // console.log(data);
          setBusiness(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        }
    
        getUsers();
      },[]);
  return (
    <div>
        <div>Officer Email {router.query.email}</div>
        {
           business.map((busi)=>{
        
            busi.phase1status === 0 ?(<Pending />):(count=count+1)
          
        })
        }

    </div>
    
  )
}

export default Email;