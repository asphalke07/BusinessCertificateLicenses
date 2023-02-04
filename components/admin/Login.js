"use client";

import { useRouter } from "next/router";
import React from "react";
import { useEffect,useState } from "react";
import {db} from "../../firebase-config";
import {getDocs,collection} from "@firebase/firestore"

const UserLogin = () => {
  const router = useRouter();
  
  const [users,setUsers] =useState([]);
  // const [userFoundBool,setUserFoundBool]=useState(false);
  // const [officerClass,setOfficerClass] = useState('A');

  const userCollectionRef=collection(db,"officers");

  const userNotFound=()=>{
    alert("You have entered wrong Email or Password");
    router.push("/admin");
  }
  const userFound=(officerClass,currentEmail)=>{
    alert("Logged in Successfully");
    // alert(officerClass);
  //   {
  //     officerClass==="A"?(router.push({
  //       pathname: '/admin/classA',
  //       // query: { email:currentEmail  }
  //   })):(router.push({
  //     pathname: '/admin/classB',
  //     // query: { email:currentEmail  }
  // }))
  //   }
  officerClass==="A"?(router.push("/admin/classA")):(router.push("/admin/classB"))
    
    // router.push("/admin/dashboard");
   
  }


  const handleClickLogIn = (event) => {
    var count=0;
    event.preventDefault();
    const currentEmail=event.target.email.value;
    const currentPassword=event.target.password.value;
    var userFound1 = false;
    var officerClass="NULL"
  
    users.map((user)=>{
        
      user.email === currentEmail && user.password === currentPassword ?(userFound1=true):(count=count+1)
    
  });
   users.map((user)=>{
        
    user.email === currentEmail && user.password === currentPassword ?(officerClass=user.class):(count=count+1)
  
});
      
    
      {
        userFound1===true?(userFound(officerClass,currentEmail)):(userNotFound())
      }
    
  };



  useEffect(()=>{
    const getUsers=async()=>{
      const data = await getDocs(userCollectionRef);
      // console.log(data);
      setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    }

    getUsers();
  },[]);

  return (
   
    <div>

<section className="h-full gradient-form bg-gray-200 md:h-screen adminloginbody  ">
  <div className=" py-12  px-6 h-full content-center ">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="xl:w-10/12">
        <div className="block bg-white shadow-lg rounded-lg">
          <div className="lg:flex lg:flex-wrap g-0">
            <div className="lg:w-6/12 px-4 md:px-0">
              <div className="md:p-12 md:mx-6">
                <div className="text-center">
                 
                  <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Log In</h4>
                </div>
                <form onSubmit={(e)=>handleClickLogIn(e)}>
                  <p className="mb-4">Please login to your account</p>
                  <div className="mb-4">
                    <input
                    name="email"
                    id="email"
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Email ID"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                    name="password"
                      type="password"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  
                  <div className="text-center pt-1 mb-12 pb-1">
                    <button
                      className="inline-block px-6 bckgrnd-gradient py-2.5 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      type="submit"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Log in
                    </button>
                    <a className="text-gray-500" href="/">Forgot password?</a>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="lg:w-6/12 flex bckgrnd-gradient items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
            
            >
              <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                <h4 className="text-xl font-semibold mb-6">Only Officers</h4>
                <p className="text-sm">
                  Only authorized officers are allowed to Log In
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
        


  );
};

export default UserLogin;