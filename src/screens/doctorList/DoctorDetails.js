import React from "react";
import "../doctorList/Doctor.css";
import Rating from "@material-ui/lab/Rating";
import { Typography } from "@material-ui/core";

const DoctorDetails = () => {
  return (
    <div>
      <Typography id="modal-header">Doctor Details</Typography>
      <Typography id="details-holder">
        <Typography className="details-text">Dr:name</Typography>
        <Typography className="details-text">
          Total Experience: Doctor’s total experience
        </Typography>
        <Typography className="details-text">
          Speciality: Doctor’s speciality
        </Typography>

        <Typography className="details-text">
          Date of Birth: Doctor’s date of birth
        </Typography>

        <Typography className="details-text">
          City: The city where the doctor lives
        </Typography>

        <Typography className="details-text">
          Email: Email address of the doctor
        </Typography>

        <Typography className="details-text">
          Mobile: Phone number of the doctor
        </Typography>

        <Typography className="details-text">
          Rating: <Rating name="read-only" value={3} readOnly />
        </Typography>
      </Typography>
    </div>
  );
};

export default DoctorDetails;
