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
    width: "50%",
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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(0);
  };

  const handleSpecialityChange = (event) => {
    setSelectedSpeciality(event.target.value);
  };
  return (
    <Grid item xs={12} sm container alignItems="center" direction="column">
      <Typography id="select-header">
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
        <Typography >
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
              onClick={() => {
                setOpen(1);
              }}
            >
              BOOK NOW
            </Button>
            <Button
              id="viewdetails-button-customize"
              type="submit"
              variant="contained"
              onClick={() => {
                setOpen(2);
              }}
            >
              VIEW DETAILS
            </Button>
            <Modal
              isOpen={open}
              onRequestClose={handleClose}
              aria-labelledby="book-appointment"
              aria-describedby="booking"
              style={customStyle}
              className={classes.paper}
            >
              <div>{open === 1 ? <BookAppointment /> : <DoctorDetails />}</div>
            </Modal>
          </div>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default withStyles(styles)(DoctorList);
