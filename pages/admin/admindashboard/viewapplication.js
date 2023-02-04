import React, { useState } from 'react'
import Microdocs from '../../admin/viewDocs/micro'
import Smalldocs from '../../admin/viewDocs/small'
import Mediumdocs from '../../admin/viewDocs/medium'
function ViewApplication() {
  const [applicationType, setapplicationType] = useState(1);
  const [approvestatus, setapprovestatus] = useState(1);
  return (
    <div>
      {
        applicationType === 1 ? (
          <div>
            <div className='flex justify-center items-center mb-12'>
              <h1 >Business Name</h1>
            </div>
            <div className='flex justify-center items-center mb-12'>
              <h1>Aadhar Number</h1>
            </div>
            <Microdocs />
            <div className='flex justify-center items-center'>
              <div className='mr-3'>
                <input type='radio' name='appli' />
                <label>Approve</label>
              </div>
              <div>
                <input type='radio' name='appli' />
                <label>Reject</label>
              </div>
            </div>
            {
              approvestatus === 0 ? (
                <div className='flex justify-center items-center mt-4 mb-8'>
                  <button>Submit</button>
                </div>
              ) : (
                <div className='flex justify-center items-center mt-4 mb-8'>
                  <h1 style={{color:'green'}}>Approved</h1>
                </div>
              )
            }

          </div>
        ) : (
          applicationType === 2 ? (
            <div>
              <div className='flex justify-center items-center mb-12'>
                <h1 >Business Name</h1>
              </div>
              <div className='flex justify-center items-center mb-12'>
                <h1>Aadhar Number</h1>
              </div>
              <Smalldocs />
              <div className='flex justify-center items-center'>
                <div className='mr-3'>
                  <input type='radio' name='appli' />
                  <label>Approve</label>
                </div>
                <div>
                  <input type='radio' name='appli' />
                  <label>Reject</label>
                </div>
              </div>
              {
                approvestatus === 0 ? (
                  <div className='flex justify-center items-center mt-4 mb-8'>
                    <button>Submit</button>
                  </div>
                ) : (
                  <div className='flex justify-center items-center mt-4 mb-8'>
                    <h1 style={{color:'green'}}>Approved</h1>
                  </div>
                )
              }
            </div>

          ) : (
            <div>

              <div className='flex justify-center items-center mb-12'>
                <h1 >Business Name</h1>
              </div>
              <div className='flex justify-center items-center mb-12'>
                <h1>Aadhar Number</h1>
              </div>
              <Mediumdocs />
              <div className='flex justify-center items-center'>
                <div className='mr-3'>
                  <input type='radio' name='appli' />
                  <label>Approve</label>
                </div>
                <div>
                  <input type='radio' name='appli' />
                  <label>Reject</label>
                </div>
              </div>
              {
                approvestatus === 0 ? (
                  <div className='flex justify-center items-center mt-4 mb-8'>
                    <button>Submit</button>
                  </div>
                ) : (
                  <div className='flex justify-center items-center mt-4 mb-8'>
                    <h1 style={{color:'green'}}>Approved</h1>
                  </div>
                )
              }
            </div>
          )
        )
      }
    </div>
  )
}

export default ViewApplication