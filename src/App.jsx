import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get('https://random-data-api.com/api/v2/users?size=4')
      .then(response => {
        const users = response.data.map(user => ({
          username: user.username,
          email: user.email,
          address: user.address.city,
          number: user.phone_number,
        }));
        setUser(users);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  // blank array means no condition. 

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">User's Data</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {user.map((user) => (
            <div key={user.id} className="bg-white rounded-lg shadow p-3 transition duration-300 ease-in-out hover:scale-105">
              <h2 className="text-xl font-bold mb-2">{user.username}</h2>
              <p><span className="font-bold">User: </span>{user.email}</p>
              <p><span className="font-bold">Category: </span>{user.address}</p>
              <p><span className="font-bold">Notes: </span>{user.number}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App