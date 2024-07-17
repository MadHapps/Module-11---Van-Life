/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { loginUser } from "../api";
import "./styling/Login.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login({ logInOut }) {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [loginState, setLoginState] = useState("idle");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const destination = location.state?.from || "/host";

  function handleSubmit(e) {
    e.preventDefault();

    setLoginState("submitting");

    loginUser(loginFormData)
      .then((data) => {
        console.log("Login successful:", data);
        setLoginState("idle");
        setError(null);
        localStorage.setItem("isLoggedIn", true);
        logInOut();
        navigate(destination, { replace: true });
      })
      .catch((error) => {
        console.log("Login error:", error);
        setLoginState("idle");
        setError(error);
      });
  }

  useEffect(() => {
    console.log("Login status:", loginState);
    loginState === "submitting" ? setSubmitting(true) : setSubmitting(false);
  }, [loginState]);

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-page-wrapper">
      {location.state?.message && (
        <h2 className="state-message">{location.state.message}</h2>
      )}
      <h1>Sign in to your account</h1>
      <p>username: b@b.com</p>
      <p>password: p123</p>
      {error?.message && <h3 className="state-message">{error.message}</h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          name="email"
          placeholder="Email address"
          onChange={handleChange}
          value={loginFormData.email}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={loginFormData.password}
        />
        <button
          type="submit"
          style={submitting ? { opacity: 0.5 } : null}
          disabled={loginState === "submitting"}
        >
          {submitting ? "Submitting..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}
