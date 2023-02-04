import Link from 'next/link'
import React from 'react'

const Pendingpage = ({bsName,bsDes,bsUrl}) => {
    return (
        <div>
                <div className="card mt-8">
                    <div className="content">
                        <h2 className="title">{bsName}</h2>
                        <p className="copy">{bsDes}</p>
                        <button className="btn"><Link href={bsUrl}>More info..</Link></button>
                    </div>
                </div>
        </div>
    )
}

export default Pendingpage