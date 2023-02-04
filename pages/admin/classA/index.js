import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function classA() {
    const router=useRouter();
    // const [officerEmail,setOfficerEmail]=useState("null");
    // useEffect(()=>{
    //     // alert(router.query.email);
    //     setOfficerEmail(router.query.email);
    // },[]);
    // const Email=officerEmail;
    const handleSubmit =(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        // console.log(email);
        router.push(router.pathname + "/"+email);
    }
    return (
        <div>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
            <h1>Enter Email</h1>
            <div className="">
                <input
                    name="email"
                    id="email"
                    type="text"
                    className="form-control block border border-solid border-gray-300 rounded "
                    placeholder="Email ID"
                />
            </div>
            <button className='text-black' type="submit">Submit</button>
            </form>
          
            {/* <h1>{officerEmail}</h1>
        {Email}
        <h1>classA</h1>

        <div>
            {console.log(router.query)}
        </div> */}
        </div>
    )
}

export default classA