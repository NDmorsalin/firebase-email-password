import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase.config";

const Header = () => {
  const { user, setUser } = useAuth();
  console.log(user?.user ,{ from: "Header" });
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
            <Link to='/update'> update Profile </Link>
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

      {
        user && (<div className="flex items-center gap-3">
            <h4 className="text-xl">{user?.displayName}</h4>
            <div className="w-8 h-8 rounded-full border border-emerald-400 p-1"> 
                <img src={user?.photoURL} alt="avater" className="w-full object-cover rounded-full" />
            </div>
        </div>)
      }
    </div>
  );
};

export default Header;
