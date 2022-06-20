import { Typography } from "@mui/material";
import React from "react";
import "./Typing.css";
const TYPING_SPEED = 150;
const DELETING_SPEED = 30;
class Typer extends React.Component<any, any> {
  state = {
    text: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: TYPING_SPEED,
  };

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { dataText } = this.props;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? DELETING_SPEED : TYPING_SPEED,
    });

    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 500);
    } else if (isDeleting && text === "") {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1,
      });
    }

    setTimeout(this.handleType, typingSpeed);
  };

  render() {
    return (
      <>
        <Typography
          variant="h3"
          component="div"
          style={{
            fontSize: "35px",
            fontWeight: 700,
            fontFamily: "Rubik",
            color: "#000",
          }}
        >
          {this.state.text}
          <span id="cursor"></span>
        </Typography>
      </>
    );
  }
}
export default Typer;
