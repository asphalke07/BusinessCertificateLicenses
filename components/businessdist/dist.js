import React, { useState } from 'react'

function BusinessDist() {
  const [employeeSize,setemployeeSize]=useState(0);
  const handleSubmit=(event)=>{
    event.preventDefault();
    const emploize=event.target.employeesize.value;
     console.log(emploize);
  }
  return (
    <div className='mt-8'>

      <main class="page-contentbusiness mt-8">


        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
          <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Micro Business</h5>
          <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">

              <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Employee Size : 0-15</span>
            </li>
          </ul>
        </div>

        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Small Business</h5>
          <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">

              <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Employee Size : 16-30</span>
            </li>
          </ul>
        </div>

        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Medium Business</h5>
          <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">

              <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Employee Size : 31-200</span>
            </li>
          </ul>
        </div>
      </main>
      <div className='content-center flex justify-center items-center mt-8' >
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form class="space-y-6" onSubmit={(e)=>handleSubmit(e)}>
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Enter Employee size in Company</h5>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employee Size</label>
              <input type="number" name="employeesize" id="employeesize" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="15" required/>
            </div>
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BusinessDist