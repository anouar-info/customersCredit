import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./users.css";
function Users() {
  const { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  console.log(user);
  function deleteUser(id) {
    axios
      .delete(`http://localhost:3001/users/${id}`)
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  }
  return (
    <>
      <div className="users h-full w-full  flex flex-col justify-center items-center">
        
        {user && (
          

<div className="w-full max-w-md bg-blue-100 border border-gray-200 rounded-lg shadow ">

<div className="flex flex-col items-center mt-10 mb-14">
    
    <h1 className="mb-4 text-4xl font-medium text-gray-900 ">{user.name}</h1>
    <h3 className="text-lg text-gray-700 mt-6">{user.email}</h3>
    <h3 className="text-lg text-gray-700 mt-2">{user.phone}</h3>
    <div className="flex mt-20 md:mt-6">
    <Link
    to={`/edit-user/${user.id}`}
    className="bg-blue-600 text-white text-lg font-bold px-6 py-2 rounded-lg mx-4"
  >
    Edit
  </Link>
  <Link
    onClick={() => deleteUser(user.id)}
    to={"#"}
    className="bg-red-600 text-white text-lg font-bold px-6 py-2 rounded-lg mx-4"
  >
    Delete
  </Link>
    </div>
</div>
</div>

        )}
      </div>
    </>
  );
}

export default Users;
