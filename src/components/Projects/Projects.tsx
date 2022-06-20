import React from "react";
import Typography from "@mui/material/Typography";
import gitHubIcon from "../../assests/SvgIcons/githubIcon.svg";
import linkIcon from "../../assests/SvgIcons/linkicon.svg";
import "./Projects.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { iconsArray, projectsArray } from "./ProjectsData";
import { SocialIcon } from "react-social-icons";
import "../About/about.css";

export const Projects = (props: any) => {
  return (
    <React.Fragment>
      <Typography className="technologyHeader" id="projects">
        <h3>Technologies i use</h3>
      </Typography>
      <div>
        {iconsArray.map((image: any) => {
          return (
            <img src={image} height={"70px"} width={"70px"} loading="lazy" />
          );
        })}
      </div>
      <div style={{ width: "90%" }}>
        <Typography className="technologyHeader">
          <h3>Personal Projects</h3>
        </Typography>
        {projectsArray.map((item: any) => {
          return (
            <Card style={{ margin: "10px" }} key={item?.id}>
              <CardContent className="cardContentContainer" style={{padding:'9px'}}>
                <Typography
                  variant="h5"
                  component="div"
                  className="projectDescMainContainer"
                  style={{ fontSize: "17px" }}
                >
                  {item.id}) {item?.Project}
                </Typography>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => window.open(item?.gitHubLink, "_blank")}
                  >
                    <img src={gitHubIcon} alt="githubIcon" />
                  </Button>
                  <Button
                    size="small"
                    onClick={() => window.open(item?.webSiteLink, "_blank")}
                  >
                    <img src={linkIcon} alt="linkIcon" />
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          );
        })}
        <Typography className="viewGithub">
          view all projects on Github
          <Button
            size="small"
            onClick={() =>
              window.open("https://github.com/kiranponnam", "_blank")
            }
          >
            <img src={gitHubIcon} alt="githubIcon" />
          </Button>
        </Typography>

        <Typography
          className="viewGithub"
          style={{ flexDirection: "column", margin: "10px" }}
        >
          <div className="aboutMeHeadingContainer">Follow me on ...</div>
          <div className="bottomSocialMediaContainer">
            <SocialIcon url="https://linkedin.com/in/kiran-ponnam" />
            <SocialIcon url="https://www.instagram.com/kiran_ponnam/" />
            <SocialIcon url="https://dev.to/kiranponnam" />
            <SocialIcon url="mailto:ponnamkiran029@gmail.com" />
          </div>
        </Typography>
      </div>
    </React.Fragment>
  );
};
