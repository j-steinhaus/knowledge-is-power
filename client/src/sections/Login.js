import React from "react";
// import FormLogin from "../components/FormLogin";
import qs from 'qs';
import { useLocation } from "react-router-dom";

function Login() {
  const location = useLocation();
  const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true });
  return (
    <>
      <form>
      <div class="form-field" id="form-field-user">
        <input type="text" id="" placeholder="Username" required />
      </div>

      <div class="form-field" id="form-field-pwd">
        <input type="password" placeholder="Password" required />
      </div>

      <div class="form-field" id="form-field-btn">
        <button
          onclick="location.href='./signup.html'"
          class="btn2"
          id="createAccount"
          type="submit"
        >
          Signup
        </button>
        <button class="btn" id="submit" type="submit">Login</button>
      </div>
    </form>
    </>
  );
}

      {/* <FormLogin error={queryParams.error} /> */}

export default Login;

