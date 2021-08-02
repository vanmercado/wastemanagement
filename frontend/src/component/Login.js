import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

// dependency for loading animation
import ReactLoading from "react-loading";

const Login = ({ handleCloseLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const loginButtonClickHandler = (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (username === "" || password === "") {
      return setErrorMessage("Don't leave any input blank");
    } else {
      setLoading(true);
      let loginBody = {
        username,
        password,
      };
      axios
        .post("http://localhost:8000/api/user/login", loginBody)
        .then((res) => {
          if (res.data.error) {
            setErrorMessage(res.data.error);
          } else {
            dispatch({
              type: "UPDATE_USER_INFO",
              payload: { ...res.data, password: "" },
            });
            localStorage.setItem(
              "user",
              JSON.stringify({ ...res.data, password: "" })
            );
            localStorage.setItem("page", "?page=1");
            handleCloseLogin();
            history.push("/main");
          }
          setLoading(false);
        })
        .catch((err) => {
          alert("communication error");
          setLoading(false);
        });
    }
  };

  return (
    <form className="container col-10 mb-5 Login">
      {loading && (
        <div className="loading-container">
          <ReactLoading type={"spokes"} color={"black"} width={100} />
        </div>
      )}
      <div className="text-center">
        <span className="text-danger">{errorMessage}</span>
      </div>
      <div className="form-group">
        <label htmlFor="login-username">Username:</label>
        <input
          id="login-username"
          className="form-control"
          type="text"
          autoFocus
          required
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="login-password">Password:</label>
        <input
          id="login-password"
          className="form-control"
          type="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button
        className="btn btn-primary btn-block mt-4"
        type="submit"
        onClick={(e) => {
          loginButtonClickHandler(e);
        }}
      >
        Login
      </button>
    </form>
  );
};

export default Login;
