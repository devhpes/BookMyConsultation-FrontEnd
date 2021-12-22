import React from "react";
import "./Register.css";
import "../Common.css";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";

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

  const [inValidMobileNumber, setErrorForIninValidMobileNumber] =
    React.useState(false);

  const [validEmail, setErrorForInvalidEmail] = React.useState(false);

  const [registration, setRegistrationSuccess] = React.useState(false);

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

    let flag = true;

    const pattern =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\\.,;:\s@"]{2,})$/i;

    firstName === "" ? setErrorForFirstName(true) : setErrorForFirstName(false);
    lastName === "" ? setErrorForLastName(true) : setErrorForLastName(false);
    email === "" ? setErrorForEmail(true) : setErrorForEmail(false);
    password === "" ? setErrorForPassword(true) : setErrorForPassword(false);
    mobileNumber === ""
      ? setErrorForMobileNumber(true)
      : setErrorForMobileNumber(false);

    if (mobileNumber.length !== 10) {
      setErrorForIninValidMobileNumber(true);
      flag = false;
    } else {
      setErrorForIninValidMobileNumber(false);
    }

    if (!email.match(pattern)) {
      setErrorForInvalidEmail(true);
      flag = false;
    } else {
      setErrorForInvalidEmail(false);
    }

    if (flag) {
      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          mobile: mobileNumber,
          password: password,
          emailId: email,
        }),
      };
      console.log(requestOptions);

      fetch("http://localhost:8081/users/register", requestOptions)
        .then((response) => {
          if (response.ok) {
            setRegistrationSuccess(true);
          };
          setTimeout(() => {
            window.location.reload(false);
          }, 1000);
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
        onSubmit={registrationHandler}
      >
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
          <div>
            {validEmail === true && (
              <FormHelperText id="invalid-error">
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
          <div>
          {inValidMobileNumber === true && (
            <FormHelperText id="invalid-error">
              Enter valid mobile number
              </FormHelperText>
          )}
          </div>
          {mobileNumberError === true && (
            <span className="error-popup">Please fill out this field</span>
          )}
        </FormControl>
        <br />
        <br />
        {registration === true && (
          <FormControl>
            <span className="registration-succes">Registration Successful</span>
          </FormControl>
        )}
        <br />
        <Button type="submit" variant="contained" color="primary">
          REGISTER
        </Button>
      </form>
    </div>
  );
};

export default Register;
