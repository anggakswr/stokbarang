import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

function SignedInLinks({ signOut, cabang }) {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/create">Barang Baru</NavLink>
      </li>
      <li>
        <a href="/#" onClick={signOut}>
          SignOut
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {cabang}
        </NavLink>
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

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
