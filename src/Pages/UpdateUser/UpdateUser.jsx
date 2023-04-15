import React, { useState } from "react";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../firebase.config";
import { useAuth } from "../../context/AuthContext";

const UpdateUser = () => {
  const { user, setUser } = useAuth();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const handleUpdate = async () => {
    // console.log({name,photo});
    const currenUsr = await updateProfile(auth.currentUser, {
      // displayName: , photoURL: {photo}
      displayName: name || auth.currentUser.displayName,
      photoURL: photo || auth.currentUser.photoURL,
    });

    // console.log(currenUsr);
     setUser(currenUsr);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Update an account</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      // value={name}
                      id="name"
                      name="name"
                      onBlur={(e) => setName(e.target.value)}
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Your name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Your name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      // value={photo}
                      id="url"
                      name="url"
                      type="url"
                      onBlur={(e) => setPhoto(e.target.value)}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="url"
                    />
                    <label
                      htmlFor="url"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Your photo url
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      onClick={handleUpdate}
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
