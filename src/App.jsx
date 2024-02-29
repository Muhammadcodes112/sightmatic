import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./pages/Register";

import { AuthProvider } from "./AuthContext";
import Verify from "./pages/Verify";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Ai from "./pages/AI";

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  const [currentUser, setCurrentUser] = useState("");
  return (
    <>
      {/* <NavBar /> */}
      <AuthProvider value={{ currentUser }}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/about">About</Route>
            <Route path="/verify" element={<Verify />}>Verify</Route>
            <Route path="/ai" element={<Ai/>}></Route>
            {/* <Route index element={<Register />} /> */}
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </AuthProvider>

      {/* <Footer /> */}
      {/* <Login/> */}
      {/* <Register /> */}
    </>
  );
}

export default App;
