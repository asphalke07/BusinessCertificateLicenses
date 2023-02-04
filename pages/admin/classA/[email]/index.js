import { useRouter } from 'next/router'
import React from 'react'

function Email() {
    const router=useRouter();
  return (
    <div>Email {router.query.email}</div>
  )
}

export default Email