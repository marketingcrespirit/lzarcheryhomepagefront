import React from "react";

const Navbar = (props) => {
  return (
    <li>
      <a className={ props.activated ? "nav-link active": "nav-link" }  href={props.tag}>
        {props.content}
      </a>
    </li>
  );
};

export default Navbar;
