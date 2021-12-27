import React from "react";
import "../doctorList/Doctor.css";
import Rating from "@material-ui/lab/Rating";
import { Typography } from "@material-ui/core";

const DoctorDetails = () => {
  return (
    <div className="doctor-details-customize">
      <Typography id="modal-header-doctor">Doctor Details</Typography>
      <Typography id="details-holder"> </Typography>
      <Typography id="doctor-name">Dr: Alexis Singh</Typography>
      <Typography id="details-text">Total Experience: 21 years</Typography>
      <Typography id="details-text">Speciality: CARDIOLOGIST</Typography>

      <Typography id="details-text">Date of Birth: 1996-12-12</Typography>

      <Typography id="details-text">City: Renukoot</Typography>

      <Typography id="details-text">Email: super.man@superman.com</Typography>

      <Typography id="details-text">Mobile: 1800 1800 123</Typography>

      <Typography id="details-text">
        Rating: <Rating name="read-only" value={3} readOnly />
      </Typography>
    </div>
  );
};

export default DoctorDetails;
