"use client";
import { useRouter, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react';

const EventForm = () => {

  const router = useRouter();
  const pathname = usePathname();
  const date = pathname.split("/").pop();

  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [organizer, setOrganizer] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
        const parsedUser = JSON.parse(user);
        const userRole = parsedUser.role;

        // Check if the user role is admin
        if (userRole !== 'admin') {
            // User is not admin, redirect to homepage
            router.push('/'); // Replace '/homepage' with the route you want to redirect to
        }
    } else {
        // User is not logged in, redirect to login page
        router.push('/auth/login'); // Replace '/login' with the route to your login page
    }
}, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = 'http://localhost:8080/api/createevent';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, date, startTime, endTime, organizer, description, location }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Event created successfully');
          setDescription("");
          setLocation("");
          setOrganizer("");
          setTitle("");
          setStartTime('');
          setEndTime('');
          router.push('/events');
        } else {
          console.error('Failed to create event');
          alert('error')
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
        <form onSubmit={handleSubmit} className="w-full md:w-2/3 lg:w-1/2 mx-auto mt-8 p-4 bg-gray-100 rounded-md">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label className="block">
                <span className="text-gray-700">Event Title:</span>
                <select
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                >
                    <option value="" disabled>Select an event</option>
                    <option value="CP Contest">CP Contest</option>
                    <option value="KEPs">KEPs</option>
                    <option value="General Meet">General Meet</option>
                </select>
            </label>
            <label className="block mt-4">
                <span className="text-gray-700">Or enter your own:</span>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                />
            </label>
        </div>
        <div>
            <label className="block">
                <span className="text-gray-700">Event Date:</span>
                <input
                    type="text"
                    value={date}
                    className="mt-1 p-2 w-full border rounded-md"
                    readOnly
                />
            </label>
            <label className="block mt-4">
                <span className="text-gray-700">Start Time:</span>
                <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                />
            </label>
            <label className="block mt-4">
                <span className="text-gray-700">End Time:</span>
                <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                />
            </label>
        </div>
    </div>
    <div className="mt-4">
        <label className="block">
            <span className="text-gray-700">Organizer:</span>
            <select
                value={organizer}
                onChange={(e) => setOrganizer(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md bg-white text-black"
                style={{ appearance: 'menulist-button' }}
            >
                <option value="" disabled>Select Organizer</option>
                {users.map((user) => (
                    <option key={user._id} value={user._id}>
                        {user.name}
                    </option>
                ))}
            </select>
        </label>
    </div>
    <div className="mt-4">
        <label className="block">
            <span className="text-gray-700">Description:</span>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
            />
        </label>
    </div>
    <div className="mt-4">
        <label className="block">
            <span className="text-gray-700">Location:</span>
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
            />
        </label>
    </div>
    <div className="mt-4">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full">
            Create Event
        </button>
    </div>
</form>

    </>
  );
};

export default EventForm;
