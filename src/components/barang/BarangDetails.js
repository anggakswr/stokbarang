import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

function BarangDetails({ barang, auth }) {
  if (auth.isLoaded && auth.isEmpty) {
    return <Redirect to="/signin" />;
  }

  return (
    <div className="container section barang-details">
      {barang ? (
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{barang.nama}</span>
            <p>Stok: {barang.stok}</p>
          </div>
          <div className="card-action lighten-4 grey-text">
            <div>Posted by {barang.cabang}</div>
            <div>{barang.createdAt.toDate().toDateString()}</div>
          </div>
        </div>
      ) : (
        <div className="container center">
          <p>Loading barang ...</p>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const barangs = state.firestoreReducer.data.barangs;
  const barang = barangs ? barangs[id] : null;

  return {
    barang,
    auth: state.firebaseReducer.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [
    { collection: "barangs", doc: props.match.params.id },
  ])
)(BarangDetails);
