import React from "react";
import { NavLink } from "react-router-dom";

export default function SignedOutLinks() {
  const links = (
    <>
      <li>
        <NavLink to="/signup">SignUp</NavLink>
      </li>
      <li>
        <NavLink to="/signin">SignIn</NavLink>
      </li>
    </>
  );

  return (
    <>
      <ul className="right hide-on-med-and-down">{links}</ul>

      <ul className="sidenav" id="slide-out">
        {links}
      </ul>
    </>
  );
}
