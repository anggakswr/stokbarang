import React from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

function SignIn({ signIn, authError, auth }) {
  const [submit, setSubmit] = React.useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    signIn(submit);
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
        <h5 className="grey-text text-darken-3">Sign In</h5>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
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
    authError: state.authReducer.authError,
    auth: state.firebaseReducer.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
