import React, { useState } from "react";
import { signUpUser, signInUser } from "../services/users";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignInUpForm = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    const result = signUpUser(name, email, password);
    if (result.success) {
      setIsSignUpActive(false);
      Swal.fire({
        title: "Good job!",
        text: result.message,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        title: "Fialed!",
        text: result.message,
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleSignInSubmit = (event) => {
    event.preventDefault();
    const result = signInUser(email, password);
    if (result.success) {
      Swal.fire({
        title: "Good job!",
        text: result.message,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/home");
    } else {
      Swal.fire({
        title: "Fialed!",
        text: result.message,
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <h2>Tripso</h2>
      <div
        className={`container ${isSignUpActive ? "right-panel-active" : ""}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUpSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleSignInSubmit}>
            <h1 style={{ marginBottom: 50 }}>Sign in</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#">Forgot your password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 style={{ marginBottom: 190 }}>Hello, Friend!</h1>
              <p>Enter your details and start journey with us</p>
              <button className="ghost" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInUpForm;
