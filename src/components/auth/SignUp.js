import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

function SignUp({ auth, signUp, authError }) {
  const [submit, setSubmit] = React.useState({
    email: "",
    password: "",
    cabang: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    signUp(submit);
  }

  function handleChange(e) {
    setSubmit({
      ...submit,
      [e.target.id]: e.target.value,
    });
  }

  if (auth.isLoaded && auth.uid) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign Up</h5>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="cabang">Cabang</label>
          <input type="text" id="cabang" onChange={handleChange} />
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">SignUp</button>
          <div className="red-text center">
            {authError && <p>{authError}</p>}
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebaseReducer.auth,
    authError: state.authReducer.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
