import React from "react";
import logo from "../../assets/logo.jpeg";
import "./Header.css";
import "../Common.css";
import Login from "../../screens/login/Login";
import Register from "../../screens/register/Register";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const style = {
  top: "50%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  height: "auto",
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <header className="header">
        <img src={logo} className="logo" alt="BookMyConsultation App Logo" />
        &nbsp;&nbsp;
        <span id="header-title"> Doctor Finder </span>
        <div className="login-button">
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Login
          </Button>
        </div>
      </header>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="login-register"
        aria-describedby="authentication"
      >
        <Card style={style} className={classes.paper}>
          <div className="typography">
            <p>Authentication</p>
          </div>
          <CardContent>
            <Tabs
              aria-label="Login and Register"
              onChange={handleChange}
              value={value}
              TabIndicatorProps={{ style: { background: "#F50057" } }}
              centered
            >
              <Tab label="Login" {...a11yProps(0)} />
              <Tab label="Register" {...a11yProps(1)} />
            </Tabs>

            <TabPanel value={value} index={0}>
              <Login />
            </TabPanel>

            <TabPanel value={value} index={1}>
              <Register />
            </TabPanel>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
};

export default Header;
