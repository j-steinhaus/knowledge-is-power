import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import FormSignup from "../components/FormSignup";
import '../assets/login.css';


function SignUp() {
  // const past = useHistory();

  const [formObject, setFormObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    movies: [],
    JS: false,
    React: false,
    HTML: false,
    CSS: false,
  });

//   strength of password to make it good 
  const [passwordStrength, setPasswordStrength] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (formObject.JS) {
  //     formObject.movies = formObject.movies.concat(Movies.JsVideoArray);
  //   }
  //   if (formObject.React) {
  //     formObject.movies = formObject.movies.concat(Movies.ReactVideoArray);
  //   }
  //   if (formObject.HTML) {
  //     formObject.movies = formObject.movies.concat(Movies.htmlVideoArray);
  //   }
  //   if (formObject.CSS) {
  //     formObject.movies = formObject.movies.concat(Movies.cssVideoArray);
  //   }
  //   API.createUser(formObject)
  //     .then((res) => {
  //       if (res.statusText === "OK") {
  //         past.push("/login");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handleToggle = (name, value) => {
  //   setFormObject({
  //     ...formObject,
  //     [name]: value,
  //   });
  // };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormObject({
  //     ...formObject,
  //     [name]: value,
  //   });

  //   if (name === "password") {
  //     API.getPasswordStrength(value).then((res) => {
  //       setPasswordStrength(res.data.strength);
  //     });
  //   }
  // };
  return (
    <>
      <form>
      <div className="form-field" id="form-field-name">
        <input type="text" placeholder="Name" required />
      </div>

      <div className="form-field" id="form-field-user">
        <input type="text" id="username" placeholder="Email" required />
      </div>

      <div className="form-field" id="form-field-pwd">
        <input type="password" placeholder="Password" required />
      </div>

      <div className="form-field" id="form-field-btn">
        <button className="btn2" id="createAccount" type="submit">Signup</button>
      </div>
    </form>
    </>
  );
}
{/* <FormSignup
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        handleToggle={handleToggle}
        formObject={formObject}
        passwordStrength={passwordStrength}
      /> */}
      
export default SignUp;