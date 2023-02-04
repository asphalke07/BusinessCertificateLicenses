import { useRouter } from 'next/router';
import React from 'react'

function Home() {
  const router = useRouter();
  return (
    <div className='mainbody bg-opacity-30' >
        <h2 className='pb-60 text-4xl'>Welcome to the Business License Portal</h2>
        <button type='button' className=" p-4 text-white mb-6 h-16 w-60 border-cyan-700 bg-slate-800 hover:bg-slate-500 " onClick={() => router.push('/user')}>User</button>
        <button type='button' className=" p-4 text-white mt-6 h-16 w-60 border-cyan-700 bg-slate-800 hover:bg-slate-500 " onClick={() => router.push('/admin')} >Admin</button>
    </div>
  )

}


export default Home;