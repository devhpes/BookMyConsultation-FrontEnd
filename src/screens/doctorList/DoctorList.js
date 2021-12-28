import React from "react";
import "./Doctor.css";
import Modal from "react-modal";
import BookAppointment from "./BookAppointment";
import DoctorDetails from "./DoctorDetails";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Paper,
  Select,
  Typography,
  Grid,
  MenuItem,
} from "@material-ui/core";

Modal.setAppElement(document.getElementById("modal"));

const customStyle = {
  content: {
    width: "40%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "auto",
    marginRight: "-50%",
    padding: "0px",
    transform: "translate(-50%, -50%)",
    border: "0.1px solid #D3D3D3",
  },
};

const customStyle2 = {
  content: {
    width: "20%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "auto",
    marginRight: "-50%",
    padding: "0px",
    transform: "translate(-50%, -50%)",
    border: "0.1px solid #D3D3D3",
  },
};

const styles = (theme) => ({
  Paper: {
    borderRadius: 5,
    padding: 5,
  },
});

const DoctorList = (props) => {
  const classes = props;

  const [selectedSpeciality, setSelectedSpeciality] = React.useState("");

  const [doctorDetailsModalOpen, setdoctorDetailsModalOpen] =
    React.useState(false);
  const [bookAppointmentModalOpen, setBookAppointmentModalOpen] =
    React.useState(false);

  const handleClose = () => {
    setdoctorDetailsModalOpen(false);
    setBookAppointmentModalOpen(false);
  };

  const handleSpecialityChange = (event) => {
    setSelectedSpeciality(event.target.value);
  };
  return (
    <div>
      <Grid item xs={12} sm container alignItems="center" direction="column">
        <Typography component={"div"} id="select-header">
          Select Speciality:
        </Typography>
        <Select
          value={selectedSpeciality}
          id="select-speciality"
          label="Speciality"
          style={{ minWidth: "200px" }}
          onChange={handleSpecialityChange}
        >
          <MenuItem aria-label="None" value="" />
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Paper
          className="paper-customize"
          square
          style={{ justifyContent: "center" }}
        >
          <Typography component={"div"}>
            <div className="doctor-customize">Doctor Name : Abhishek Singh</div>
            <br />
            <div className="speciality-customize">
              Speciality : Obstetrician-Gynecologists
            </div>
            <div className="rating-customize">Rating : * * * * *</div>
            <div className="button-div-customize">
              <Button
                id="booknow-button-customize"
                variant="contained"
                color="primary"
                onClick={(_) => {
                  setBookAppointmentModalOpen(true);
                }}
              >
                BOOK NOW
              </Button>
              <Button
                id="viewdetails-button-customize"
                type="submit"
                variant="contained"
                onClick={(_) => {
                  setdoctorDetailsModalOpen(true);
                }}
              >
                VIEW DETAILS
              </Button>
              <Modal
                isOpen={bookAppointmentModalOpen || false}
                onRequestClose={handleClose}
                aria-labelledby="book-appointment"
                aria-describedby="booking"
                style={customStyle}
                className={classes.paper}
              >
                <BookAppointment />
              </Modal>
              <Modal
                isOpen={doctorDetailsModalOpen || false}
                onRequestClose={handleClose}
                aria-labelledby="book-appointment"
                aria-describedby="booking"
                style={customStyle2}
                className={classes.paper}
              >
                <DoctorDetails />
              </Modal>
            </div>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(DoctorList);
