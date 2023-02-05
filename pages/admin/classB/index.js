//

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function classB() {
  const router = useRouter();
  // const [officerEmail,setOfficerEmail]=useState("null");
  // useEffect(()=>{
  //     // alert(router.query.email);
  //     setOfficerEmail(router.query.email);
  // },[]);
  // const Email=officerEmail;
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // console.log(email);
    router.push(router.pathname + "/" + email);
  };
  return (
    <div className="mainbody">
    {/* <form  onSubmit={(e)=>{handleSubmit(e)}}>
          <center><h1 className=''>Enter Email</h1></center>
          <div className="">
              <input
                  name="email"
                  id="email"
                  type="text"
                  className="form-control block border border-solid border-gray-300 rounded-full "
                  placeholder=" Email ID"
              />
          </div>
          <button className='text-black m-4 border-red-300 ' type="submit">Submit</button>
          </form> */}
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e)=>{handleSubmit(e)}}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="email"
          >
            Enter your Email
          </label>
          <input
            name="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Email ID"
          />
        </div>
       
        <div class="flex items-center justify-between">
          <button
            className="bg-red-100 hover:bg-red-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
          
        </div>
      </form>
    </div>

    {/* <h1>{officerEmail}</h1>
      {Email}
      <h1>classA</h1>

      <div>
          {console.log(router.query)}
      </div> */}
  </div>
  );
}

export default classB;
