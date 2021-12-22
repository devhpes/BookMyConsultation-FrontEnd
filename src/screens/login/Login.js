import React from "react";
import "./Login.css";
import "../Common.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import FormHelperText from '@mui/material/FormHelperText';


const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [emailError, setErrorForEmail] = React.useState(false);
  const [passwordError, setErrorForPassword] = React.useState(false);

  const [validEmail, setErrorForInvalidEmail] = React.useState(false);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = (e) => {
    if (e) e.preventDefault();
    email === "" ? setErrorForEmail(true) : setErrorForEmail(false);
    password === "" ? setErrorForPassword(true) : setErrorForPassword(false);

    const pattern =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email.match(pattern)) {
      setErrorForInvalidEmail(false);
      return false;
    } else {
      setErrorForInvalidEmail(true);
      return true;
    }
  };

  return (
    <div>
      <form
        noValidate
        className="authentication-customize"
        autoComplete="off"
        onSubmit={loginHandler}
      >
        <FormControl variant="standard" required>
          <InputLabel htmlFor="username">Email</InputLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={emailChangeHandler}
          />
          <div>
            {validEmail === true && (
              <FormHelperText id="invalid-email-error">Enter valid Email</FormHelperText>
            )}
          </div>
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
