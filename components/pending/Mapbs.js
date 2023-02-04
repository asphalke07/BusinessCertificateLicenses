import React from 'react'
import {bsdata} from '../../utils/bsdata.js'
import Pendingpage from '../pending/Pendingpages'
const Mapbs=() =>{
  return (
    <div>
    <main class="page-content">
    {
       bsdata.map((data)=>(
        <Pendingpage bsName={data.bsName} bsDes={data.bsDes} bsUrl={data.bsUrl}/>
       ))
    }
    </main>
    </div>
  )
}

export default Mapbs