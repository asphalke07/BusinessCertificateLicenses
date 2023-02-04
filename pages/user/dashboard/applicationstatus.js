import React, { useState } from 'react'
import NavbarExp from '../../../components/navbar'

function ApplicationStatus() {
    const [application, setapplication] = useState(-1);
    const [phase1, setphase1] = useState(1);
    const [phase2, setphase2] = useState(1);
    return (
        <div>
            <NavbarExp />
            {
                application === -1 ? (
                    <><div className='flex justify-center items-center mt-8'>

                        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Business Name</h5>
                            <div class="flex items-baseline text-gray-900 dark:text-white">
                                <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">Officier Name</span>
                            </div>
                            <ul role="list" class="space-y-5 my-7">
                                <li class="flex space-x-3">

                                    <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    {phase1 === -1 ? (
                                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Phase 1 Running</span>
                                    ) : (
                                        phase1 === 1 ? (
                                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Approved by Phase 1</span>
                                        ) : (
                                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Rejected by Phase 1 </span>
                                        )
                                    )}
                                </li>
                                <li class="flex space-x-3">

                                    <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    {phase2 === -1 ? (
                                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Phase 2 Running</span>
                                    ) : (
                                        phase2 === 1 ? (
                                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Approved by Phase 2</span>
                                        ) : (
                                            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Rejected by Phase 2 </span>
                                        )
                                    )}
                                </li>


                            </ul>

                        </div>

                    </div><div>
                            {phase1 === 1 && phase2 === 1 ? (<h1 className='flex justify-center items-center mt-8' style={{ color: 'green' }}>
                                Approved</h1>) : (
                                <h1 className='flex justify-center items-center mt-8'> Still in Process </h1>
                            )}
                        </div></>
                ) : (<div className='flex justify-center items-center mt-8' > No Application Submited</div>)
            }

        </div>
    )
}

export default ApplicationStatus