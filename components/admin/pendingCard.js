// import Link from 'next/link'
import React from 'react'
// import Link from 'next/link';
const Pendingpage = ({busiName,busiAadhar,busiEmployee}) => {
    return (
        <div className='flex justify-center items-center'>
                <div className="card mt-8">
                    <div className="content">
                        <h2 className="title">{busiName}</h2>
                        <p className="copy">{busiAadhar}</p>
                        <p className="copy">{busiEmployee}</p>
                        {/* <button className="btn"><Link href={bsUrl}>More info..</Link></button> */}
                    </div>
                </div>
        </div>
    );
}

export default Pendingpage;