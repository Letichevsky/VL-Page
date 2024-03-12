import React, { Component } from "react";
import "./Header.scss";
import Logo from "../../assets/img/logo.svg";

class Header extends Component {
  state = {
    prevScrollPos: 0,
    visible: true,
  };

  handleScroll = () => {
    const { prevScrollPos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;
    const hVisible = currentScrollPos;

    this.setState({
      prevScrollPos: currentScrollPos,
      visible,
      hVisible,
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { visible } = this.state;
    const { hVisible } = this.state;

    return (
      <header
        className="Header"
        style={{
          marginTop: visible || hVisible < 10 ? "0" : "-18rem",
          // marginTop: hVisible < 50 ? "0" : "-18rem",
          transition: "margin-top 0.3s",
        }}
      >
        <div className="contentArea">
          <div className="langBox"></div>
          <nav className="nav" id="nav1">
            <ul className="navUl">
              <li className="navLi">
                <a href="#About" className="navA">
                  About
                </a>
              </li>
              <li className="navLi">
                <a href="#Partners" className="navA">
                  For partners
                </a>
              </li>
            </ul>
          </nav>
          <div className="logoBox">
            {/* <img src={Logo} alt="" className="logo" /> */}
            <svg
              class="svg-logo"
              width="168"
              height="217"
              viewBox="0 0 168 217"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.46429 2L43 107.019M63.5 54.5095L84 2M103.036 2V107.019M122.071 107.019H166M2 133.274H164.536M23.9643 160.987L33.4821 187.242M43 213.497L33.4821 187.242M33.4821 187.242H13.7143M3.46429 213.497H4.92857M63.5 160.987C63.5 160.987 103.036 158.945 103.036 174.114C103.036 189.284 78.1429 187.242 63.5 186.63L103.036 213.497M123.536 160.987H144.036V214.955M163.071 160.987H164.536M62.0357 213.497H63.5"
                stroke="#000"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <nav className="nav" id="nav2">
            <ul className="navUl">
              <li className="navLi">
                <a href="#Clients" className="navA">
                  For clients
                </a>
              </li>
              <li className="navLi">
                <a href="#About" className="navA">
                  Portfolio
                </a>
              </li>
            </ul>
          </nav>
          <div className="langBox"></div>
        </div>
      </header>
    );
  }
}

export default Header;
