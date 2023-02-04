import React from 'react'
import {bsdata} from '../../utils/bsdata'
import Pendingpage from '../pending/Pendingpages'
const Mapbs=() =>{
  return (
    <div>
    {
       bsdata.map((dat)=>{
        console.log("its clicked");
        <Pendingpage/>
       })
    }
    </div>
  )
}

export default Mapbs