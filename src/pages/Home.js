import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  function loadUsers() {
    axios.get("http://localhost:3001/users").then((res) => {
      setUsers(res.data.reverse());
    });
  }

  useEffect(() => {
    loadUsers();
  }, []);

  function deleteUser(id) {
    axios
      .delete(`http://localhost:3001/users/${id}`)
      .then(() => {
        loadUsers(); // Wrap the function in a lambda to pass the reference
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  }

  return (
    <>
      
    
      <div className="flex flex-wrap -mx-3 mb-5 ">
        <div className="w-full max-w-full px-3 mb-6  mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
              <div className="pt-5 px-9 flex flex-wrap min-h-[70px] pb-0 bg-transparent">
                <div className="flex items-center justify-center m-2 text-3xl mx-auto">
                  <p className="text-center text-dark font-extrabold">
                    Customers
                  </p>
                </div>
              </div>

              <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                  <table className="w-full my-0 align-middle text-dark border-neutral-200">
                    <thead className="align-bottom">
                      <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                      <th className="pb-3 text-center min-w-[175px]"></th>
                        <th className="pb-3 text-center min-w-[175px]">Name</th>
                        <th className="pb-3 text-center min-w-[100px]">
                          Email
                        </th>
                        <th className="pb-3 text-center min-w-[100px]">
                          Phone
                        </th>
                        <th className="pb-3 pr-12 text-center min-w-[100px]">
                          Credit
                        </th>
                        <th className="pb-3 pr-12 text-center min-w-[175px]">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((data, index) => (
                        <tr
                          key={index}
                          className="border-b border-dashed last:border-b-0"
                        >
                        <td className="px-6 py-4 whitespace-nowrap">
                          
                           
                        <div className="flex  text-left  ">
                        <p className="mb-1 mr-4 text-blue-600 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary">
                          {" "}
                          {index + 1}{" "}
                        </p>
                      </div>
                            
                          </td>
                          <td className="p-3 pl-0">
                          
                            <div className="flex items-center">
                              
                              <div className="flex flex-col justify-center mx-auto">
                                <p className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary">
                                  {" "}
                                  {data.name}{" "}
                                </p>
                              </div>
                            </div>
                            
                          </td>
                          <td className="p-3 pr-0  justify-center items-center text-center">
                            <span className="font-semibold text-light-inverse text-md/normal">
                            {data.email}
                            </span>
                          </td>
                          <td className="p-3 pr-0  justify-center items-center text-center">
                          <span className="font-semibold text-light-inverse text-md/normal">
                          {data.phone}
                        </span>
                          </td>
                          <td className="p-3 pr-12 text-center">
                            <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-red-500 bg-red-100 rounded-lg">
                              {" "}
                              200 MAD{" "}
                            </span>
                          </td>
                          <td className="pr-0 text-center ">
                            <Link
                              to={`/users/${data.id}`}
                              className="bg-teal-600 text-white px-6 py-2 rounded-lg mx-4"
                            >
                              VIew
                            </Link>
                            <Link
                              to={`/edit-user/${data.id}`}
                              className="bg-blue-600 text-white px-6 py-2 rounded-lg mx-4"
                            >
                              Edit
                            </Link>
                            <Link
                              onClick={() => deleteUser(data.id)}
                              to={"#"}
                              className="bg-red-600 text-white px-6 py-2 rounded-lg mx-4"
                            >
                              Delete
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Home;
