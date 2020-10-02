import React from "react";
import Notifications from "./Notifications";
import BarangList from "../barang/BarangList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

function Dashboard({ barangs, auth, notifications }) {
  if (auth.isLoaded && auth.isEmpty) {
    return <Redirect to="/signin" />;
  }

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <BarangList barangs={barangs} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications notifications={notifications} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    barangs: state.firestoreReducer.ordered.barangs,
    auth: state.firebaseReducer.auth,
    notifications: state.firestoreReducer.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "barangs", limit: 5, orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 5, orderBy: ["time", "desc"] },
  ])
)(Dashboard);
