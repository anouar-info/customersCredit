import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    name: name,
    email: email,
    phone: phone,
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:3001/users/${id}`, data).then(navigate("/"));
  }
  return (
    <>
      <div className="edit w-screen h-full flex flex-col justify-center items-center ">
        <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mt-20">
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 ">
              User details
            </h5>
            <div>
              <label
                htmlFor="name"
                className="text-left block mb-2 text-sm font-medium text-gray-900 "
              >
                Full Name :
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-left block mb-2 text-sm font-medium text-gray-900 "
              >
                Email :
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-left block mb-2 text-sm font-medium text-gray-900 "
              >
                Phone Number :
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="phone"
                name="phone"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>

            <button
              type="submit"
              onClick={Update}
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Update user
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Add;
