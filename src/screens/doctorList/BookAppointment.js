import React from "react";
import "./Doctor.css";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Typography } from "@material-ui/core";

const BookAppointment = ({ doctorDetails }) => {
  const [selectedDate, handleDateChange] = React.useState(new Date());
  const [medicalHistory, setMedicalHistory] = React.useState("");
  const [symptoms, setSymptoms] = React.useState("");
  const [slot, setSlot] = React.useState("None");
  const [slotError, setSlotError] = React.useState(false);
  const timeSlots = ['None', '11AM-12PM', '12PM-1PM', '1PM-2PM', '2PM-3PM', '3PM-4PM', '4PM-5PM', '5PM-6PM', '6PM-7PM'];

  let doctorName = doctorDetails.firstName + " " + doctorDetails.lastName;

  const handleChange = (value) => {
    setSlot(value);
    console.log(value);
  };
  const handleBooking = (e) => {
    if (e) e.preventDefault();
    slot === "None" ? setSlotError(true) : setSlotError(false);
  };

  return (
    <div className="booking-holder">
      <div
        style={{
          background: "purple",
          color: "white",
          padding: "11px",
          height: "70px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography id="modal-header-appointment">
          Book an Appointment
        </Typography>
      </div>
      <div id="book-appointment-container">
        <form noValidate autoComplete="off">
          <div id="doctor-name-text">
            <TextField
              disabled
              required
              value={doctorName}
              id="standard-basic"
              label="Doctor Name"
            />
          </div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <div>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Timeslot </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={slot}
                onChange={(e) => {
                  handleChange(e.target.value);
                }}
              >
              {timeSlots.map((time, key) => {
                return <MenuItem key={key} value={time}>{time}</MenuItem>;
              })}
              </Select>
              <div>
                {slot === "None" && slotError === true && (
                  <FormHelperText id="invalid-error">
                    Select a time slot
                  </FormHelperText>
                )}
              </div>
            </FormControl>
          </div>
          <FormControl>
            <TextField
              onChange={(e) => {
                setMedicalHistory(e.target.value);
              }}
              id="standard-multiline-static"
              label="Medical History"
              multiline
              value={medicalHistory}
              rows={4}
            />
            <div>
              <TextField
                onChange={(e) => {
                  setSymptoms(e.target.value);
                }}
                id="standard-multiline-static"
                label="Symptoms"
                value={symptoms}
                multiline
                rows={4}
              />
            </div>

            <Button
              id="bookappointment-button-customize"
              variant="contained"
              color="primary"
              onClick={handleBooking}
            >
              BOOK APPOINTMENT
            </Button>
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
