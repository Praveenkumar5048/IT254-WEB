import React from 'react'


const Sidenav = () => {
  return (

    <div id="logo-sidebar" className="hidden lg:block fixed top-0 left-0 z-40 w-64 h-screen  transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div className="h-full px-3 py-4 overflow-y-auto bg-title-400">
      <a href="/" className="flex items-center ps-2.5 mb-5 ">
        <img src='/club-logo.jpg' className="h-6 me-3 sm:h-10 rounded-lg" alt="ie_logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Student Club</span>
      </a>
      <ul className="space-y-2 font-medium text-white">
          <li>
            <a href="/" className="flex items-center p-2  rounded-lg text-white hover:text-title-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg className="w-5 h-5 text-title-500 transition duration-75 fill-current dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                 <path fill="currentColor" fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.707-.457l-7 6a.5.5 0 0 0-.193.457V16a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-6.543a.5.5 0 0 0-.193-.457l-7-6A.5.5 0 0 0 10 3.5zm1 0a.5.5 0 0 1 .354.146L18 9.293V15.5a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-.5.5h-3A1.5 1.5 0 0 1 2 15.5v-6.207L8.646 3.646A.5.5 0 0 1 9 3.5z" clipRule="evenodd"/>
            </svg>
               <span className="ms-3">Home</span>
            </a>
          </li>
          <li>
            <a href="/events" className="flex items-center p-2  rounded-lg text-white hover:text-title-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="w-5 h-5 text-title-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span className="ms-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/events/allevents" className="flex items-center p-2  rounded-lg text-white hover:text-title-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-title-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">All Events</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2  rounded-lg text-white hover:text-title-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-title-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Organisers</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2  rounded-lg text-white hover:text-title-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-title-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
          </li>
          
      </ul>
    </div>
  </div>
  )
}

export default Sidenav;