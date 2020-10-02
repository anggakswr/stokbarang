import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

function Navbar({ auth, profile }) {
  const links = auth.isEmpty ? (
    <SignedOutLinks />
  ) : (
    <SignedInLinks cabang={profile.cabang} />
  );

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          StokBarang
        </Link>

        <a href="/#" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>

        {auth.isLoaded && links}
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebaseReducer.auth,
    profile: state.firebaseReducer.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
