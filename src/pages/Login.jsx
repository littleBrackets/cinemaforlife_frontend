import React, { useState } from "react";
import "../assets/styles/login.css";
import { login } from "../api/user";
import { useNavigate } from "react-router-dom";
import { setAuthorisation } from "../store/reducers/userReducer";
import { useDispatch } from "react-redux";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispach = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    login({
      username,
      password,
    })
      .then((res) => {
        setLoading(false);
        localStorage.setItem("token", res.access_token);
        dispach(setAuthorisation(true));
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
        setError("Login failed");
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
