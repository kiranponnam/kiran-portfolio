import "./about.css";
import { Projects } from "../Projects/Projects";
import Home from "../Home/Home";
const about = (props: any) => {
  return (
    <div className="mainAboutContainer">
      <div className="middleAboutContainer" id="middleAboutContainer">
        <Home />
      </div>
      <Projects />
    </div>
  );
};
export default about;
