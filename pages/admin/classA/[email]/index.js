import { useRouter } from 'next/router'
import React,{useState,useEffect} from 'react'
import {db} from "../../../../firebase-config";
import {getDocs,collection} from "@firebase/firestore"
import PendingApplication from '../../admindashboard/pendingapplication';
import PendingpageCard from '../../../../components/admin/pendingCard';

function Email() {
  var count=0;
    const router=useRouter();
    const [business,setBusiness] = useState([]);
    const userCollectionRef=collection(db,"registerUser");
    useEffect(()=>{
        const getUsers=async()=>{
          const data = await getDocs(userCollectionRef);
          // console.log(data);
          setBusiness(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        }
    
        getUsers();
      },[]);
  return (
    <div className='pt-12'>
    {/* <AdminNavbar /> */}
    <h1 className="text-xl text-center font-mono">Officer Email : {router.query.email}</h1>
    <h1 className='text-center text-3xl'>Pending applications</h1>
    
    <main class="page-content flex justify-center items-center">
    { 
         business.map((busi)=>(
           busi.phase1status === 1 && busi.phase2status===0?(<PendingpageCard
            busiName={busi.name}
            busiAadhar={busi.aadharcard}
            busiEmployee={busi.employee}
            />):(count=count+1))
      
         
        
          )
           }

      </main>

  </div>
    
  )
}

export default Email;