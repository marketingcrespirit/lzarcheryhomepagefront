import React, { Component } from "react";
import Navbar from "../../spa/elements/Navbar";

class Navbars extends Component {
  state = {
    showPanel: false,
    activeIndex: null
  };

  toggleHandler = () => {
    const newState = !this.state.showPanel;
    this.setState({ showPanel: newState });
  };

  clickHandler = index => {
    this.setState({ activeIndex: index });
    console.log(index);
  };

  render() {
    let toggle = this.state.showPanel ? "active" : "";
    let open = this.state.showPanel ? "nav-close" : "";
    let style = "nav-open " + open;
    let barStyle = "navbar-menu " + toggle;
    return (
      <div className="navbar">
        <div className="container clearfix fixed-width-nav">
          <div className="brand mobile-brand mobile">
            <a href="#top">
              {" "}
              <img src="/assets/spa/icons/logo.png" alt="" />{" "}
            </a>
          </div>
          <button onClick={this.toggleHandler} href="#" className={style}>
            <div className="inner"></div>
          </button>

          <ul className={barStyle}>
            <div className="brand desktop">
              <a href="https://lzarchery.com">
                <img className="navbar-logo-m" src="/assets/spa/icons/logo.png" alt="立禪射藝射箭標誌" />
              </a>
            </div>

            <div onClick={this.toggleHandler} className="nav-lists">
              {this.props.navLists.map((el, index) => {
                return <Navbar key={index} activated={ index === this.props.activatedIndex} tag={el.tag} content={el.content} />;
              })}
              <li className="reserve">
                <a href="/children/forms">
                  預約體驗
                </a>
              </li>
              <li>
                <a href="#contact">
                  <img src="/assets/spa/icons/call_center.png" alt="contact us icon" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/LZarchery/" target="_blank" rel="noopener noreferrer">
                  <img className="facebook-icon" src='/assets/spa/icons/facebook.png' alt="facebook link icon" />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbars;
