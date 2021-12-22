import React from "react";
import "./Login.css";
import "../Common.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [emailError, setErrorForEmail] = React.useState(false);
  const [passwordError, setErrorForPassword] = React.useState(false);

  const [invalidEmail, setErrorForInvalidEmail] = React.useState(false);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = (e) => {
    if (e) e.preventDefault();

    if (email === "" || password === "") {
      setErrorForEmail(true);
      setErrorForPassword(true);
      return true;
    // }
    // if (validateEmail(email)){
    //     return;
    }
     else {
      setErrorForEmail(false);
      setErrorForPassword(false);
      setEmail("");
      setPassword("");
      return false;
    }
  };

  const validateEmail = (email) =>{
    const pattern =  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const result = pattern.test(email);
    if(result===true){
      setErrorForInvalidEmail(false)
        return false
    } else{
      setErrorForInvalidEmail(true)
        return true
    }
}

  return (
    <div>
      <form noValidate className="authentication-customize" autoComplete="off">
        <FormControl variant="standard" required>
          <InputLabel htmlFor="username">Email</InputLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={emailChangeHandler}
          />
          {emailError === true && (
            <span className="error-popup">Please fill out this field</span>
         )}
        </FormControl>
        <br />
        <br />
        <FormControl variant="standard" required>
          <InputLabel htmlFor="loginPassword">Password</InputLabel>
          <Input
            id="loginPassword"
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />
          {passwordError === true && (
            <span className="error-popup">Please fill out this field</span>
          )}
        </FormControl>
        <br />
        <br />
        <br />
        <Button
          type="submit"
          onClick={loginHandler}
          variant="contained"
          color="primary"
          className="button-color"
        >
          LOGIN
        </Button>
      </form>
    </div>
  );
};

export default Login;
