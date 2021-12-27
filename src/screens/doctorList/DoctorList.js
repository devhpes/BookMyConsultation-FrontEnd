import React from "react";
import "./Doctor.css";
import BookAppointment from "./BookAppointment";
import DoctorDetails from "./DoctorDetails";
import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  Paper,
  Select,
  Typography,
  Grid,
  Modal,
} from "@material-ui/core";

const style = {
  width: "40%",
  height: "auto",
  top: "50%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "3px",
  border: "1px solid #CCCCCC",
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
}));

const DoctorList = () => {
  const classes = useStyles();

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
    <div>
      <Grid item xs={12} sm container alignItems="center" direction="column">
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

        <Paper
          className="paper-customize"
          square
          style={{ justifyContent: "center" }}
        >
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
            <Button
              className="booknow-button-customize"
              variant="contained"
              color="primary"
              onClick={() => {
                setOpen(1);
              }}
            >
              BOOK NOW
            </Button>
            <Button
              className="viewdetails-button-customize"
              type="submit"
              variant="contained"
              onClick={() => {
                setOpen(2);
              }}
            >
              VIEW DETAILS
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="book-appointment"
              aria-describedby="booking"
              BackdropProps={{style: {backgroundColor: 'rgba(225,225,225,0.8)'}}}
            >
              <div style={style} className={classes.paper}>
                {open === 1 ? <BookAppointment /> : <DoctorDetails />}
              </div>
            </Modal>
          </div>
        </Paper>
      </Grid>
    </div>
  );
};

export default DoctorList;
