import React from "react";
// import FormLogin from "../components/FormLogin";
import qs from 'qs';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// import SignUp from "./Signup";

function Login() {
  const location = useLocation();
  const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true });
  return (
    <>
      <form>
      <div className="form-field" id="form-field-user">
        <input type="text" id="" placeholder="Username" required />
      </div>

      <div className="form-field" id="form-field-pwd">
        <input type="password" placeholder="Password" required />
      </div>
      <Link to="/Signup" id="signUp">
                Sign Up
              </Link>
      <div className="form-field" id="form-field-btn">
        <button
          onclick="location.href='./signup.js'"
          className="btn2"
          id="createAccount"
          type="submit"
        >
          Signup
        </button>
        <button className="btn" id="submit" type="submit">Login</button>
      </div>
    </form>
    </>
  );
}

      {/* <FormLogin error={queryParams.error} /> */}

export default Login;

