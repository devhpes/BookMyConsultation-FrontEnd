import React from "react";
import "./Login.css";
import "../Common.css"
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <div>
      <form
        noValidate
        className="authentication-customize"
        autoComplete="off"
      >
        <FormControl variant="standard" required>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input id="username" type="text" />
        </FormControl>
        <br />
        <br />
        <FormControl variant="standard" required>
          <InputLabel htmlFor="loginPassword">Password</InputLabel>
          <Input id="loginPassword" type="password" />
        </FormControl>
        <br />
        <br />
        <br />
        <Button type="submit" variant="contained" className="button-color">
          LOGIN
        </Button>
      </form>
    </div>
  );
};

export default Login;
