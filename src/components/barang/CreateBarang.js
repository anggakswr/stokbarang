import React from "react";
import { connect } from "react-redux";
import { createBarang } from "../../store/actions/barangActions";
import { Redirect } from "react-router-dom";

function CreateBarang({ createBarang, auth, history }) {
  const [submit, setSubmit] = React.useState({
    nama: "",
    stok: 0,
  });

  function handleSubmit(e) {
    e.preventDefault();
    createBarang(submit);
    history.push("/");
  }

  function handleChange(e) {
    setSubmit({
      ...submit,
      [e.target.id]: e.target.value,
    });
  }

  if (auth.isLoaded && auth.isEmpty) {
    return <Redirect tp="/signin" />;
  }

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Tambah Barang</h5>

        <div className="input-field">
          <label htmlFor="nama">Nama Barang</label>
          <input type="text" id="nama" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="stok">Stok</label>
          <input type="number" id="stok" onChange={handleChange} />
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">
            Tambah Barang
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebaseReducer.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBarang: (barang) => dispatch(createBarang(barang)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBarang);
