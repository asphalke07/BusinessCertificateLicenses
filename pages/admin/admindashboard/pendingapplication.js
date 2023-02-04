import React from 'react'
import AdminNavbar from '../../../components/adminnavbar'
import {bsdata} from '../../../utils/bsdata.js'
import PendingpageCard from '../admindashboard/PendingpageCard'
import Link from 'next/link'
function PendingApplication() {
  return (
    <div>
    <AdminNavbar/>
    <main class="page-content flex justify-center items-center">
    {
       bsdata.map((data)=>(
        <PendingpageCard bsName={data.bsName} bsDes={data.bsDes} bsUrl={data.bsUrl}/>
       ))
    }
    </main>
    </div>
  )
}

export default PendingApplication