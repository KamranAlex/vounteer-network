import React, { useContext } from "react";
import googleICON from "../../logos/google.png";
import "./Login.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        storeAuthToken();
        history.replace(from);
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className='container'>
      <div className='row text-center'>
        <div className='login-container'>
          <div className='container'>
            <h1 className='mb-4'>Sign In</h1>
            <button
              onClick={handleGoogleSignIn}
              className='google-login d-flex justify-content-between'
            >
              <div className='social-icon'>
                <img src={googleICON} alt='' />
              </div>
              <div className='social-text'>
                <p> Continue with Google</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
