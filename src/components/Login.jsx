import React, { useState } from "react";
import "./Login.css";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email == "" && password == "") {
      alert("Fill in all details");
    } else {
      console.log(email, password);

      signInWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
          console.log("Sign in Successful");
          navigate("/AI");
          setEmail("");
          setPassword("");
        }
      );
    }
  };

  return (
    <div>
      <div className="centre">
        <h1>LOGIN</h1>
        <div className="box"></div>
        <form method="post" onSubmit={handleSubmit}>
          <div className="txt_feild">
            <input
              type="text"
              name="email"
              required
              value={email}
              onChange={handleEmailInput}
            />
            <span></span>
            <label for="">Email</label>
          </div>

          <div className="txt_feild">
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={handlePasswordInput}
            />
            <span></span>
            <label for="">PASSWORD</label>
          </div>
          <div className="pass">FORGOT PASSWORD?</div>
          {/* <input type="submit" value="login" /> */}
          <button
            type="submit"
            className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Submit
          </button>

          <div className="sign_up_link">
            Not a Member? <a href="#">signup</a>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
