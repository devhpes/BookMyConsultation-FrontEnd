import React from "react";
import "./Register.css";
import "../Common.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const Register = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");

  const [firstNameError, setErrorForFirstName] = React.useState(false);
  const [lastNameError, setErrorForLastName] = React.useState(false);
  const [emailError, setErrorForEmail] = React.useState(false);
  const [passwordError, setErrorForPassword] = React.useState(false);
  const [mobileNumberError, setErrorForMobileNumber] = React.useState(false);

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const mobileNumberChangeHandler = (e) => {
    setMobileNumber(e.target.value);
  };

  const registrationHandler = (e) => {
    if (e) e.preventDefault();

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      mobileNumber === ""
    ) {
      setErrorForFirstName(true);
      setErrorForLastName(true);
      setErrorForEmail(true);
      setErrorForPassword(true);
      setErrorForMobileNumber(true);
      return;
    } else {
      setErrorForFirstName(false);
      setErrorForLastName(false);
      setErrorForEmail(false);
      setErrorForPassword(false);
      setErrorForMobileNumber(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setMobileNumber("");
      return;
    }
  };

  return (
    <div>
      <form noValidate className="authentication-customize" autoComplete="off">
        <FormControl variant="standard" required>
          <InputLabel htmlFor="firstname">First Name</InputLabel>
          <Input
            id="username"
            value={firstName}
            onChange={firstNameChangeHandler}
            type="text"
          />
          {firstNameError === true && (
            <span className="error-popup">Please fill out this field</span>
          )}
        </FormControl>

        <br />
        <br />
        <FormControl variant="standard" required>
          <InputLabel htmlFor="lastname">Last Name</InputLabel>
          <Input
            id="lastname"
            value={lastName}
            onChange={lastNameChangeHandler}
            type="text"
          />
          {lastNameError === true && (
            <span className="error-popup">Please fill out this field</span>
          )}
        </FormControl>
        <br />
        <br />
        <FormControl variant="standard" required>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            value={email}
            onChange={emailChangeHandler}
            type="email"
          />
          {emailError === true && (
            <span className="error-popup">Please fill out this field</span>
          )}
        </FormControl>
        <br />
        <br />
        <FormControl variant="standard" required>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="loginPassword"
            value={password}
            onChange={passwordChangeHandler}
            type="password"
          />
          {passwordError === true && (
            <span className="error-popup">Please fill out this field</span>
          )}
        </FormControl>
        <br />
        <br />
        <FormControl variant="standard" required>
          <InputLabel htmlFor="mobile">Mobile No.</InputLabel>
          <Input
            id="mobile"
            value={mobileNumber}
            onChange={mobileNumberChangeHandler}
            type="number"
          />
          {mobileNumberError === true && (
            <span className="error-popup">Please fill out this field</span>
          )}
        </FormControl>
        <br />
        <br />
        <Button
          type="submit"
          onClick={registrationHandler}
          variant="contained"
          className="button-color"
        >
          REGISTER
        </Button>
      </form>
    </div>
  );
};

export default Register;
