import React from "react";
import logo from "../../assets/logo.jpeg";
import "./Header.css";
import "../Common.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Login from "../../screens/login/Login";
import Register from "../../screens/register/Register";
import Modal from "@mui/material/Modal";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CardContent from "@mui/material/CardContent";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";

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

const tabCustomize = {
  color: "#000",
  fontWeight: 400,
};

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
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <header>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar className="header-design">
              <IconButton edge="start" aria-label="logo">
                <img
                  src={logo}
                  className="header-logo"
                  alt="Doctor Finder Logo"
                />
              </IconButton>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Doctor Finder
              </Typography>

              <Button
                onClick={handleOpen}
                variant="contained"
                className="button-color"
              >
                Login
              </Button>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="login-register"
                aria-describedby="authentication"
                sx={style}
              >
                <Card sx={{ minWidth: 300 }}>
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
                      <Tab
                        label="Login"
                        {...a11yProps(0)}
                        style={tabCustomize}
                      />
                      <Tab
                        label="Register"
                        {...a11yProps(1)}
                        style={tabCustomize}
                      />
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
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </header>
  );
};

export default Header;
