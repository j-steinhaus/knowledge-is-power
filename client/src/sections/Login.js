import React from "react";
import FormLogin from "../components/FormLogin";
import qs from 'qs';
import { useLocation } from "react-router-dom";

function Login() {
  const location = useLocation();
  const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true });
  return (
    <>
      <FormLogin error={queryParams.error} />
    </>
  );
}

export default Login;