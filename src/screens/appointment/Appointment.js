import React from "react";
import "./Appointment.css";
import Button from "@material-ui/core/Button";
import RateAppointment from "./RateAppointment";
import Modal from "react-modal";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

Modal.setAppElement(document.getElementById("root"));

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
    border: "0.1px solid #D3D3D3"
  },
};

const styles = (theme) => ({
  Paper: {
    borderRadius: 5,
    padding: 5,
  },
});

const Appointment = (props) => {
  const classes = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Paper className="paper-customize-appointment">
        <Typography id="doctor-name">Dr: name</Typography>

        <Typography id="details-text">Date: 2021-08-02</Typography>

        <Typography id="details-text">Symptoms: </Typography>

        <Typography id="details-text">priorMedicalHistory: </Typography>

        <Button
          onClick={handleOpen}
          id="from-btn"
          variant="contained"
          color="primary"
        >
          RATE APPOINTMENT
        </Button>
        <Modal
          isOpen={open}
          onRequestClose={handleClose}
          aria-labelledby="appointment-modal"
          aria-describedby="appointment-booking"
          style={customStyle} 
          
        >
          <div className={classes.paper}>
            <RateAppointment />
          </div>
        </Modal>
      </Paper>
    </div>
  );
};
export default  withStyles(styles)(Appointment);
