import React from "react";
import "./Appointment.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import RateAppointment from "./RateAppointment";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const style = {
  width: "50%",
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

const Appointment = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Paper>
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
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div style={style} className={classes.paper}>
            <RateAppointment />
          </div>
        </Modal>
      </Paper>
    </div>
  );
};
export default Appointment;
