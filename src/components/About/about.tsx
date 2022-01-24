import "./about.css";
import { SocialIcon } from "react-social-icons";
import { Button } from "@material-ui/core";
import { Box, Card, CardContent} from "@material-ui/core";
const about = (props: any) => {
  return (
    <div className="mainAboutContainer">
      {/* <div className="topAboutContainer">
        <span className="aboutTitle">Kiran Ponnam</span>
        <span>Im a web developer</span>
      </div> */}
      <div className="middleAboutContainer">
        <img
          src="/assests/profilephoto.jpg"
          alt="ProfilePic"
          className="profileContainer"
        />
        <div className="aboutMeHeadingContainer">About me</div>
        <div className="descriptionContainer">
          Hi I am Kiran Ponnam, a 24 year old Web developer living in Hyderabad,
          India. I am a Computer Science Engineer, currently working as a React
          Js Developer at CraftAny IT Solutions.
        </div>
        <div className="ResumeContainer">
          <Button
            color="primary"
            variant="contained"
            href="https://drive.google.com/drive/u/1/folders/1c8DJceb9sebr5Dd2FT1dT-7JN-mF76VG"
          >
            Resume
          </Button>
        </div>
        <div className="aboutMeHeadingContainer">Follow me on ...</div>
        <div className="bottomSocialMediaContainer">
          <SocialIcon url="https://linkedin.com/in/kiran-ponnam" />
          <SocialIcon url="https://www.instagram.com/kiran_ponnam/" />
          <SocialIcon url="https://dev.to/kiranponnam" />
          <SocialIcon url="mailto:ponnamkiran029@gmail.com" />
        </div>
      </div>
      <div className="mainTechnicalSkillsContainer"> Technical Skills</div>
      <Box>
        <div className="topTechnicalSkillContainer">
          <span className="skillItem">JavaScript</span>
          <span className="skillItem">React Js</span>
          <span className="skillItem">Node Js</span>
          <span className="skillItem">Next Js</span>
          <span className="skillItem">Express Js</span>
          <span className="skillItem">HTML</span>
          <span className="skillItem">CSS</span>
        </div>
      </Box>
      {/* <div className="mainTechnicalSkillsContainer"> Technical Experience</div>
      <Box>
        <Card><CardContent>Jhaiho Private Limited</CardContent></Card>
      </Box> */}
    </div>
  );
};
export default about;
