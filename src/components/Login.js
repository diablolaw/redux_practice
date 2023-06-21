import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";
import { logout } from "../reducers/user";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "John", age: 25, email: "j@gmail" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default Login;
