import React, { FC, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import "./nav.css";
import Logo from "../../assests/log.png";
import { Button } from "@material-ui/core";

const NavBar: FC<any> = () => {
  const gotProjects = () => {
    var element = document.getElementById("projects");
    element && element.scrollIntoView({ behavior: "smooth" });
  };
  const gotHomePage = () => {
    var element = document.getElementById("app");
    element && element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }} className="headerFixed">
        <AppBar position="static" style={{ backgroundColor: "#ffff" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img
                src={Logo}
                alt="logo"
                className="logo"
                height={"45px"}
                width="43px"
                loading="lazy"
                onClick={gotHomePage}
              />
            </IconButton>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className="headerListItems"
            >
             <Button  onClick={gotHomePage}>Home</Button> 
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className="headerListItems"
            >
               
               <Button  onClick={gotProjects}>Projects</Button> 
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};
export default NavBar;
