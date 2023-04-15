import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase.config";

const Header = () => {
  const { user, setUser } = useAuth();

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between py-4 shadow shadow-emerald-300">
      <Link to="/" className="text-3xl font-bold text-emerald-700">
        Logo
      </Link>

      <div className="flex items-center gap-4 space-x-3">
        <Link to="/" className="text-">
          Home
        </Link>
        {user ? (
          <>
            <h1 className="">Email :{user.email}</h1>
            <button
              onClick={logout}
              className="bg-blue-500 text-white rounded-md px-2 py-1"
            >
              Logout
            </button>
          </>
        ) : (
          <div className="">
            <Link to="/login" className="text-">
              Login
            </Link>
            <Link to="/register" className="text-">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
