import React from "react";

export const useLogout = () => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState(null);

  const logoutURL = "http://localhost:8081/auth/logout";
  const token = sessionStorage.getItem("access-token");

  const logout = () => {
    fetch(logoutURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((result) => {
        setLoggedIn(false);
        setUserDetails(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { logout, isLoggedIn, userDetails };
};
