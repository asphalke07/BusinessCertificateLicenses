import { useRouter } from 'next/router';
import React, { useContext, useState ,useEffect} from 'react'
import {db} from "../../firebase-config";
import {getDocs,doc,updateDoc,collection} from "@firebase/firestore"
import { UserContext } from '../../context/UserContext';

const BusinessDist =()=> {
  const {indiUser} = useContext(UserContext);
  const [users,setUsers] =useState([]);

  const userCollectionRef=collection(db,"registerUser");

  const router=useRouter();
  var count=0;

  const updateUser = async (id,btype,employee) => {
    // console.log(id);
    // console.log(age);

     const userDoc = doc(db,"regsiterUser",id);
     const newFields = {btype:btype,employee:employee};
     await updateDoc(userDoc,newFields);

     router.push("/user/uploaddocs/" +`${btype}`);

  };


  const handleSubmit=(event)=>{
    event.preventDefault();
    alert("hello");
    var count=0;
    const emploize=event.target.employeesize.value;
    var userId="";
    (users.map((user)=>{
        
      user.businessEmail === indiUser ?(userId=user.id):(count=count+1)
    
  }));

  {
    emploize < 16 ? (
    updateUser(userId,"microdocs",emploize)
    ):(
      emploize>15 && emploize<31 ?(
        updateUser(userId,"smalldocs",emploize)
        // router.push('/user/uploaddocs/smalldocs')
      ):(
        // router.push('/user/uploaddocs/mediumdocs')
        updateUser(userId,"mediumdocs",emploize)
      )
    )
  }
  }

  useEffect(()=>{
    const getUsers=async()=>{
      const data = await getDocs(userCollectionRef);
      // console.log(data);
      setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    }

    getUsers();
  },[]);

  return (
    <div className='mt-8'>

      <main className="page-contentbusiness mt-8">


        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Micro Business</h5>
          <ul role="list" className="space-y-5 my-7">
            <li className="flex space-x-3">

              <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Employee Size : 0-15</span>
            </li>
          </ul>
        </div>

        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Small Business</h5>
          <ul role="list" className="space-y-5 my-7">
            <li className="flex space-x-3">

              <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Employee Size : 16-30</span>
            </li>
          </ul>
        </div>

        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Medium Business</h5>
          <ul role="list" className="space-y-5 my-7">
            <li className="flex space-x-3">

              <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Employee Size : 31-200</span>
            </li>
          </ul>
        </div>
      </main>
      
      <div className='content-center flex justify-center items-center mt-8' >
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={(e)=>handleSubmit(e)}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Enter Employee details of Company</h5>
            <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employee Size</label>
              <input type="number" name="employeesize" id="employeesize" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="15" required/>
            </div>
           
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BusinessDist;