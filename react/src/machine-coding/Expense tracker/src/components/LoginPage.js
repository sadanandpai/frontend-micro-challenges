import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  startEmailLogin,
  startGoogleLogin,
  startFacebookLogin,
  startGithubLogin
} from '../actions/auth';
import Header from '../components/Header';

export const LoginPage = ({ startEmailLogin, startGoogleLogin, startFacebookLogin, startGithubLogin }) => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    startEmailLogin(user.email, user.password);
  };

  return (
    <React.Fragment>
      <Header />
      <main>
        <section className="login-container">
          <form className="login-email" onSubmit={ onSubmit }>
            <h2>Login</h2>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              onChange={ onChange }
            />
            <input
              type="password"
              name="password"
              autoComplete="on"
              required
              placeholder="Password"
              onChange={ onChange }
            />
            <button type="submit" className="button">Sign In</button>
          </form>
          <div className="login-socials">
            <h4>Or login with:</h4>
            <button className="button" onClick={ startGoogleLogin }>
              <svg viewBox="0 0 44.12 44.97">
                <path d="M51.8,26.53l-.23-1H30.65v8.85h12.5a12.52,12.52,0,0,1-12.24,9.41,14.63,14.63,0,0,1-9.85-3.92A14,14,0,0,1,16.86,30,14.53,14.53,0,0,1,21,20.07a14,14,0,0,1,9.78-3.83,12.8,12.8,0,0,1,8.33,3.25l6.29-6.26A22.22,22.22,0,0,0,30.56,7.52h0a22.88,22.88,0,0,0-16.22,6.59A22.83,22.83,0,0,0,7.94,30a22.6,22.6,0,0,0,6.15,15.62A23.47,23.47,0,0,0,31,52.48a20.87,20.87,0,0,0,15.21-6.39,22.48,22.48,0,0,0,5.84-15.55A26.92,26.92,0,0,0,51.8,26.53Z" transform="translate(-7.94 -7.52)" />
              </svg>
            </button>
            <button className="button" onClick={ startFacebookLogin }>
              <svg viewBox="0 0 13.52 25.243">
                <path d="M14.243,14.2l.7-4.568H10.561V6.666A2.284,2.284,0,0,1,13.136,4.2h1.993V.309A24.3,24.3,0,0,0,11.592,0c-3.61,0-5.97,2.188-5.97,6.149V9.631H1.609V14.2H5.622V25.243h4.939V14.2Z" transform="translate(-1.609)" />
              </svg>
            </button>
            <button className="button" onClick={ startGithubLogin }>
              <svg viewBox="0 0 30.849 26.992">
                <path d="M17.995,26.989a2.539,2.539,0,0,1-1.752-.9.6.6,0,0,1,.852-.852,1.478,1.478,0,0,0,.9.547,1.478,1.478,0,0,0,.9-.547.6.6,0,1,1,.852.852,2.54,2.54,0,0,1-1.752.9ZM2.571,17.759a19.909,19.909,0,0,0,.386,4.087,12.46,12.46,0,0,0,1.085,3.179,8.842,8.842,0,0,0,1.767,2.36A10.336,10.336,0,0,0,8.13,29.056,12.963,12.963,0,0,0,11,30.119a22.327,22.327,0,0,0,3.286.568q1.671.162,3.679.162t3.687-.162a22.31,22.31,0,0,0,3.294-.568,13.143,13.143,0,0,0,2.876-1.062,10.429,10.429,0,0,0,2.338-1.671,8.754,8.754,0,0,0,1.775-2.36,12.661,12.661,0,0,0,1.093-3.179,19.519,19.519,0,0,0,.394-4.087A10.332,10.332,0,0,0,30.913,10.8a6.193,6.193,0,0,0,.249-.892q.1-.5.2-1.419a8.768,8.768,0,0,0-.072-2.117,11.643,11.643,0,0,0-.635-2.449l-.241-.049a2.563,2.563,0,0,0-.787.033A9.994,9.994,0,0,0,28.35,4.2a10.182,10.182,0,0,0-1.888.835A20.208,20.208,0,0,0,24.02,6.616a20.514,20.514,0,0,0-12.066,0A19.117,19.117,0,0,0,9.5,5.042,12.625,12.625,0,0,0,7.64,4.2a6.5,6.5,0,0,0-1.293-.292,4.05,4.05,0,0,0-.763-.041,1.155,1.155,0,0,0-.249.057,12.013,12.013,0,0,0-.643,2.449,8.493,8.493,0,0,0-.08,2.109A14.147,14.147,0,0,0,4.82,9.908a6.028,6.028,0,0,0,.257.892,10.293,10.293,0,0,0-2.506,6.958ZM6.684,21.19a6.924,6.924,0,0,1,1.928-4.755,3.846,3.846,0,0,1,1.342-.985,4.854,4.854,0,0,1,1.735-.38,15.759,15.759,0,0,1,1.856.018q.884.063,2.185.172t2.249.109q.948,0,2.249-.109t2.185-.172a15.76,15.76,0,0,1,1.856-.018,4.926,4.926,0,0,1,1.743.38,3.826,3.826,0,0,1,1.35.985A6.925,6.925,0,0,1,29.29,21.19a10.633,10.633,0,0,1-.321,2.739,7.828,7.828,0,0,1-.811,2.016,4.183,4.183,0,0,1-1.374,1.374,9.194,9.194,0,0,1-1.711.868,10.02,10.02,0,0,1-2.137.479q-1.31.172-2.346.208t-2.611.036q-1.575,0-2.6-.036t-2.338-.208a10.015,10.015,0,0,1-2.137-.479A9.194,9.194,0,0,1,9.19,27.32a4.182,4.182,0,0,1-1.374-1.374,7.826,7.826,0,0,1-.811-2.016,10.638,10.638,0,0,1-.321-2.739Zm3.6-.946c0-1.6.863-2.892,1.928-2.892s1.928,1.295,1.928,2.892-.863,2.892-1.928,2.892S10.283,21.842,10.283,20.244Zm11.568,0c0-1.6.863-2.892,1.928-2.892s1.928,1.295,1.928,2.892-.863,2.892-1.928,2.892S21.851,21.842,21.851,20.244Z" transform="translate(-2.571 -3.856)" />
              </svg>
            </button>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  startEmailLogin: (email, password) => dispatch(startEmailLogin(email, password)),
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startFacebookLogin: () => dispatch(startFacebookLogin()),
  startGithubLogin: () => dispatch(startGithubLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);