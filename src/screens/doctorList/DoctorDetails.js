import React from "react";
import "../doctorList/Doctor.css";
import Rating from "@material-ui/lab/Rating";

export default function DoctorDetails() {
  return (
    <div>
      <div id="modal-header">Doctor Details</div>
      <div id="details-holder">
        <div className="details-text">Dr:name</div>
        <div className="details-text">
          Total Experience: Doctor’s total experience
        </div>
        <div className="details-text">Speciality: Doctor’s speciality</div>

        <div className="details-text">
          Date of Birth: Doctor’s date of birth
        </div>

        <div className="details-text">
          City: The city where the doctor lives
        </div>

        <div className="details-text">Email: Email address of the doctor</div>

        <div className="details-text">Mobile: Phone number of the doctor</div>

        <div className="details-text">
          Rating: <Rating name="read-only" value={3} readOnly />
        </div>
      </div>
    </div>
  );
}
