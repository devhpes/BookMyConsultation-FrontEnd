import React from "react";
import "./Register.css";
import "../Common.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const Register = () => {
  return (
    <div>
      <form noValidate className="authentication-customize" autoComplete="off">
        <FormControl variant="standard" required>
          <InputLabel htmlFor="firstname">First Name</InputLabel>
          <Input id="username" type="text" />
        </FormControl>
        <br />
        <br />
        <FormControl variant="standard" required>
          <InputLabel htmlFor="lastname">Last Name</InputLabel>
          <Input id="lastname" type="text" />
        </FormControl>
        <br />
        <br />
        <FormControl variant="standard" required>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" type="email" />
        </FormControl>
        <br />
        <br />
        <FormControl variant="standard" required>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="loginPassword" type="password" />
        </FormControl>
        <br />
        <br />
        <FormControl variant="standard" required>
          <InputLabel htmlFor="mobile">Mobile No.</InputLabel>
          <Input id="mobile" type="number" />
        </FormControl>
        <br />
        <br />
        <Button type="submit" variant="contained" className="button-color">
          REGISTER
        </Button>
      </form>
    </div>
  );
};

export default Register;
