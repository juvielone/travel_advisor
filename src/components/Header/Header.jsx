import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";

import { Link } from "react-router-dom";

import useStyles from "./styles";
import logo from "../icons/logo.svg";

const Header = ({ setCoordinates }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ backgroundColor: "#5CB8E7" }}>
      <Toolbar className={classes.toolbar}>
        <a href="/" style={{ textDecoration: "none", color: "white" }}>
          <Typography
            variant="h5"
            className={classes.title}
            style={{ fontFamily: "'Ubuntu', sans-serif" }}
          >
            My Daily Guide
            <img src={logo} alt="logo" style={{ width: "4rem" }} />
          </Typography>
        </a>

        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              About
            </Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
