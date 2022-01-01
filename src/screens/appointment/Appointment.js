import React from "react";
import "./Appointment.css";
import Button from "@material-ui/core/Button";
import RateAppointment from "./RateAppointment";
import Modal from "react-modal";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { useAuthContext } from "../../hooks/useAuthContext";

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

const Appointment = (props) => {
  const classes = props;
  const [open, setOpen] = React.useState(false);

  const emailId = sessionStorage.getItem("emailId");

  const [userAppointments, setUserAppointments] = React.useState([]);

  console.log(userAppointments);

  const { userToken } = useAuthContext();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getUserAppointmentAPI = `http://localhost:8081/users/${emailId}/appointments`;

  const getUserAppointment = () => {
    fetch(getUserAppointmentAPI, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json;Charset=UTF-8",
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((appointment) => {
        setUserAppointments(appointment);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getUserAppointment();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {userToken || open ? (
        <div>
          {userAppointments.map((appointment, index) => (
            <Paper className="paper-customize-appointment" key={index}>
              <Typography id="doctor-name">
                Dr: {appointment.doctorName}
              </Typography>

              <Typography id="details-text">
                Date: {appointment.appointmentDate}
              </Typography>

              <Typography id="details-text">
                Symptoms: {appointment.symptoms}
              </Typography>

              <Typography id="details-text">
                priorMedicalHistory: {appointment.priorMedicalHistory}
              </Typography>

              <Button
                onClick={handleOpen}
                id="from-btn"
                variant="contained"
                color="primary"
              >
                RATE APPOINTMENT
              </Button>
            </Paper>
          ))}
        </div>
      ) : (
        <div>
          <Typography id="appointment-tab-error">
            Login to see appointments
          </Typography>
        </div>
      )}
      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        aria-labelledby="appointment-modal"
        aria-describedby="appointment-booking"
        style={customStyle}
      >
        <div className={classes.paper}>
          <RateAppointment/>
        </div>
      </Modal>
    </div>
  );
};
export default withStyles(styles)(Appointment);
