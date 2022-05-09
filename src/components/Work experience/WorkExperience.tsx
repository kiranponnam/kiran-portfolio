import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { workExperineceJson } from "./WorkExperienceData";
import "./workexperince.css";
export const WorkExperince = () => {
  return (
    <React.Fragment>
      <div style={{ width: "90%" }}>
        <Typography className="technologyHeader">
          <h3>Work Experience</h3>
        </Typography>
        {workExperineceJson.map((item: any) => {
          return (
            <Card style={{ margin: "10px" }}>
              <CardContent
                className="cardContentContainer"
                style={{ padding: "9px" }}
              >
                <Grid container item>
                  <Grid xs={12} sm={12} md={6} lg={6}>
                    <Typography
                      variant="h5"
                      component="div"
                      className="projectDescMainContainer"
                      style={{ fontSize: "17px" }}
                    >
                      {item?.Company}
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      className="projectDescMainContainer"
                      style={{ fontSize: "14px" }}
                    >
                      Designation: {item?.Position}
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      className="projectDescMainContainer"
                      style={{ fontSize: "14px" ,flexDirection:'row',alignItems:'flex-start'}}
                    >
                  {item?.Description}
                    </Typography>
                  </Grid>
                  <Grid xs={12} sm={12} md={6} lg={6}>
                    <CardActions style={{ flexDirection: "column" }}>
                      <Typography>Period: {item?.Period}</Typography>
                      <Typography>Tech stack used: {item?.Tech}</Typography>
                    </CardActions>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </React.Fragment>
  );
};
