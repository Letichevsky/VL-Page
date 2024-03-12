import React from "react";
import "./Welcome.scss";
import Arrow from "../Arrow/Arrow";
// import Logo from "../../assets/img/logo.svg";

class Welcome extends React.Component {
  render() {
    return (
      <div className="Welcome">
        {/* <img src={Logo} alt="" className="logo" /> */}
        <h1>digital creation studio</h1>
        <h2>by VLADISLAV LETICHEVSKY</h2>
        <p className="welcomeText">
          Welcome to the VL ART website! <br />
          Here, we've gathered all the valuable information about our team,
          products, and our portfolio of work. To get acquainted with it, simply
          <br />
          scroll down.
        </p>
        <Arrow id="ArrowWelcome" target="#About" />
      </div>
    );
  }
}

export default Welcome;
