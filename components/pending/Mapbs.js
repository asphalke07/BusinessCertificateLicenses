import React from 'react'
import {bsdata} from '../../utils/bsdata'
// import Pendingpage from '../pending/Pendingpage'
import Pendingpage from '../pending/Pendingpage'
const Mapbs=() =>{
  
    <div>
    {/* {
       bsdata.map((data)=>{
        console.log("its clicked");
        <Pendingpage bsName={data.bsName} bsDes={data.bsDes} bsUrl={data.bsUrl}/>
       })
    } */}
    <Pendingpage />
    </div>
  
}

export default Mapbs