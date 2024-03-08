"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction' // a plugin!


const EventsPage = () => {
  
  const router = useRouter(); 
  const [events, setEvents] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role,setRole]=useState("");

  const handleDateClick = (arg) => {
    console.log(role);
    if(role === 'admin'){
      router.push(`/events/createEvent/${arg.dateStr}`);
    }  
  };
  
  useEffect(() => {
    const user = localStorage.getItem('user');
        const parsedUser = JSON.parse(user);
        const userRole = parsedUser.role;
        setRole(userRole)
  }, []);

  const eventObjects = events.map((event) => {
    const colorMapping = {
      "CP Contest": "#FFD700", 
      "KEPs": "#00FF00", 
      "General Meet": "#FFA07A", 
    };
    const backgroundColor = colorMapping[event.title] || "#0080FF";
    return {
      title: event.title,
      start: `${event.date.substring(0, 11)}${event.startTime}:00`,
      end:`${event.date.substring(0, 11)}${event.endTime}:00`,
      backgroundColor: backgroundColor,
    };
  });

  const renderEventContent = (eventInfo) => {
    return (
      <div className="w-full rounded-md pl-2"  style={{ backgroundColor: eventInfo.backgroundColor }} >
       
      <div className="">{eventInfo.event.title}</div>
      </div>
    );
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/getEvents');
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
          
        } else {
          console.error('Error fetching events:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);



  const handleDelete = (eventId) => {

    const deleteEvent = async (eventId) => {
      try {
        const response = await fetch(`http://localhost:8080/api/deleteEvent/${eventId}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          window.location.href = '/events';
        } else {
          console.error('Error deleting event:', response.statusText);
        }
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    };

    if (window.confirm('Are you sure you want to delete this event?')) {
      deleteEvent(eventId);
    }
  };

return (
    
<>
  <aside id="logo-sidebar" className="hidden lg:block fixed top-0 left-0 z-40 w-64 h-screen  transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div className="h-full px-3 py-4 overflow-y-auto bg-title-400">
      <a href="/" className="flex items-center ps-2.5 mb-5 ">
        <img src="logo.jpg" className="h-6 me-3 sm:h-10" alt="ie_logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">IE NITK</span>
      </a>
      <ul className="space-y-2 font-medium text-white">
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
          
          <li>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:text-title-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-title-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 rounded-l text-white hover:text-title-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-title-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
            </a>
          </li>
      </ul>
    </div>
  </aside>

  <div className="lg:ml-64">
    <div className="h-16 bg-title-500">
      <h1 className="text-title text-xl sm:text-3xl font-bold tracking-wide leading-tight pt-4 pl-5 sm:pl-9">Club Events Management</h1>
    </div>
    <div className="overflow-y-auto" style={{ height: 'calc(100vh - 4rem)' }}>
      <div className="flex justify-center m-4 mt-10 lg:m-0 lg:mt-10">
        <div className="w-full lg:w-3/4">
        <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin,   ]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'today prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        aspectRatio={1.7}
        dateClick={handleDateClick}
        eventContent={renderEventContent}
        events={eventObjects} 
        />
        </div>
      </div>

      
    </div>
  </div>
</>

   );
}

export default EventsPage;