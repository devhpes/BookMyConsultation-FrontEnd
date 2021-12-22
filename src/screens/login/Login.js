import React from "react";
import "./Login.css";
import "../Common.css";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [emailError, setErrorForEmail] = React.useState(false);
  const [passwordError, setErrorForPassword] = React.useState(false);

  const [validEmail, setErrorForInvalidEmail] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(false);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = (e) => {
    if (e) e.preventDefault();

    let flag = true;

    email === "" ? setErrorForEmail(true) : setErrorForEmail(false);
    password === "" ? setErrorForPassword(true) : setErrorForPassword(false);

    const encodeEmailAndPassword = window.btoa(`${email}:${password}`);

    const pattern =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\\.,;:\s@"]{2,})$/i;

    if (!email.match(pattern)) {
      setErrorForInvalidEmail(true);
      flag = false;
    } else {
      setErrorForInvalidEmail(false);
    }
    if (flag) {
      fetch("http://localhost:8081/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json;Charset=UTF-8",
          Authorization: `Basic ${encodeEmailAndPassword}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            setLoggedIn(true);
            sessionStorage.setItem(
              "access-token",
              response.headers.get("access-token")
            );
            // Setting timeout to hold login screen for 1sec after successful login
            setTimeout(() => {
              window.location.reload(false);
            }, 1000);
          }
        })
        .catch((error) => {
          console.log(error);
        });
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
              <FormHelperText id="invalid-email-error">
                Enter valid Email
              </FormHelperText>
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
        <FormControl>
          {loggedIn === true && (
            <span className="login-success">Login Successful!</span>
          )}
        </FormControl>
        <br />
        <Button type="submit" variant="contained" color="primary">
          LOGIN
        </Button>
      </form>
    </div>
  );
};

export default Login;
