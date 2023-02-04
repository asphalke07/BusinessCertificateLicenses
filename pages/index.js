import { useRouter } from 'next/router';
import React from 'react'

function Home() {
  const router = useRouter();
  return (
    <div>
        <button type='button' className="p-4 text-black" onClick={() => router.push('/user')}>User</button>
        <button type='button' className="p-4 text-black" onClick={() => router.push('/admin')} >Admin</button>
    </div>
  )

}


export default Home;