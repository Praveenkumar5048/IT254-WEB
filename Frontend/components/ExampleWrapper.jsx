import { AnimatePresence, motion } from "framer-motion";

import { useState, useEffect } from "react";

const ExampleWrapper = ({ isOpen, setIsOpen, eventId }) => {

  const [eventDetails, setEventDetails] = useState(null);
  
  const fetchEventDetails = async (eventId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/getEventDetails/${eventId}`);
      if (response.status === 404) {
        throw new Error("Failed to fetch event details");
      }
      const data = await response.json();
      console.log(data);
      return data; 
    } catch (error) {
      console.error("Error fetching event details:", error);
      return null; 
    }
  };

  useEffect(() => {
    if (isOpen && eventId) {
        fetchEventDetails(eventId).then((data) => {
          setEventDetails(data);
        });
    
    }
  }, [isOpen, eventId]);
 
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{ opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.1 } }} 
        exit={{ opacity: 0, transition: { duration: 0 } }} // No animation for disappearance
        className="bg-slate-400/20 backdrop-blur-sm p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { ease: "easeOut", duration: 0.1 } }} 
          exit={{ scale: 0 }} // No animation for disappearance
          className="bg-gradient-to-br from-teal-300 to-title-500 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
        >
          <div className="relative z-10 bg-white border border-gray-300 p-4 rounded-lg shadow-md text-black">
            <h3 className="text-3xl font-bold text-center mb-6">{eventDetails?.title}</h3>
            <p className=" mb-2">{eventDetails?.description}</p>
            <div className="border-t-2 pt-2 font-semibold">
            <div className="flex justify-between mb-4 ">
               <p>Organizer: {eventDetails?.organizer}</p>
               <p>Date: {formatDate(eventDetails?.date)}</p>
            </div>
            <div className="flex justify-between mb-4">
               <p>Time: {eventDetails?.startTime} - {eventDetails?.endTime}</p>
               <p>Venue: {eventDetails?.location}</p>
            </div>
            <div className="flex justify-end">
              <button
               onClick={() => setIsOpen(false)}
               className="bg-white hover:bg-gray-200 text-title-500 font-semibold py-1 px-4 rounded-md border border-gray-300"
               >
               Close
              </button>
            </div>
            </div>
          </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExampleWrapper;
