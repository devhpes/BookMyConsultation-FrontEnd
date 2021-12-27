import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Rating from "@material-ui/lab/Rating";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import "./Appointment.css";

const RateAppointment = () => {
  const [comment, setComment] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const [ratingError, setRatingError] = React.useState(false);

  const handleRating = () => {
    if (rating === 0) {
      setRatingError(true);
      return;
    }
    console.log(rating, comment);
  };

  return (
    <div>
      <div id="rating-model-header">
        <span id="rating-header">Rate an Appointment</span>
      </div>
      <div id="rating-body">
        <div className="rate-input">
          <TextField
            onChange={(e) => {
              setComment(e.target.value);
            }}
            id="standard-multiline-static"
            multiline
            rows={4}
            label="Comment"
          />
          {/* <div className={(unfilled && symptoms == "") ? "helper-text" : "helper-ignore"}>Please fill out this field</div> */}
        </div>
        <div className="rate-input">
          <FormControl error={rating === 0 && ratingError} {...console.log()}>
            Rating:
            <Rating
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              name="read-only"
            />
            {rating === 0 && ratingError && (
              <FormHelperText>Submit a rating</FormHelperText>
            )}
          </FormControl>
        </div>
        <Button
          onClick={handleRating}
          id="from-btn"
          variant="contained"
          color="primary"
        >
          RATE APPOINTMENT
        </Button>
      </div>
    </div>
  );
};

export default RateAppointment;
