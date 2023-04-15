import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
import { useAuth } from "./context/AuthContext";

function App() {
  // const [user, setUser] = useState(0);
  const { user, setUser } = useAuth();
  
  useEffect(() => {
    const observer = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
        // alert("You are not Logged in user");
      }
    });

    return () => observer();
  }, [user]);

  return (
    <div className="container mx-auto px-8">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
