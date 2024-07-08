import { useState } from "react";
import { loginUser } from "../api";
import "./styling/Login.css";
import { useLocation } from "react-router-dom";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();

    loginUser(loginFormData).then((data) => console.log(data));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-page-wrapper">
      {location.state?.message && <h2 className="state-message">{location.state.message}</h2>}
      <h1>Sign in to your account</h1>
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
        <button>Sign in</button>
      </form>
    </div>
  );
}
