import React from "react";
import "./Doctor.css";
import { Button, Paper, Select, Typography } from "@material-ui/core";

const DoctorList = () => {
  const [selectedSpeciality, setSelectedSpeciality] = React.useState("");

  const handleSpecialityChange = (event) => {
    setSelectedSpeciality(event.target.value);
  };
  return (
    <div>
      <div>
        <p className="select-header">Select Speciality:</p>
      </div>
      <Select
        id="select-speciality"
        value={selectedSpeciality}
        label="Speciality"
        style={{ width: "15%" }}
        onChange={handleSpecialityChange}
      >
        <option aria-label="None" value="" />
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </Select>
      <div>
        <Paper className="paper-customize" square>
          <Typography className="doctor-customize">
            Doctor Name : Abhishek Singh
          </Typography>
          <br />
          <Typography className="speciality-customize">
            Speciality : Obstetrician-Gynecologists
          </Typography>
          <Typography className="rating-customize">
            Rating : * * * * *
          </Typography>
          <div className="button-div-customize">
          <Button className="booknow-button-customize" type="submit" variant="contained" color="primary">
            BOOK NOW
          </Button>
          <Button className="viewdetails-button-customize" type="submit" variant="contained">
            VIEW DETAILS
          </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default DoctorList;
