import { Grid, Button } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import React from "react";
import { getAge } from "../Utility";
import "./Home.css";
const Home = () => {
  return (
    <React.Fragment>
      <Grid container item style={{ padding: "6px" }}>
        <Grid xs={12} sm={12} md={6} lg={6}>
            <Typography
              className="home-name-container"
              variant="h6"
              component="div"
            >
              Hi, I am Kiran Ponnam,
            </Typography>
            <Typography
              variant="h3"
              component="div"
              style={{ fontSize: "35px",fontWeight:700,fontFamily:'Rubik',color:'#000' }}
            >
              Web Developer,
            </Typography>
            <Typography       className="home-name-container"
              variant="h6"
              component="div">
              {/* <div className="descriptionContainer"> */}
                I'm {getAge("02-06-1998")} years old living in Hyderabad, India.
                I am a Computer Science Engineer, currently working as a React
                Js Developer at CraftAny IT Solutions.
              {/* </div> */}
            </Typography>
            <div className="ResumeContainer">
              <Button
                color="primary"
                variant="contained"
                onClick={()=> window.open("https://drive.google.com/drive/u/1/folders/1c8DJceb9sebr5Dd2FT1dT-7JN-mF76VG")}
              >
                My Resume
              </Button>
            </div>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6}>
          <img
            src="/assests/profilephoto.jpg"
            alt="ProfilePic"
            className="profileContainer"
            height={"240px"}
            width={"240px"}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Home;
