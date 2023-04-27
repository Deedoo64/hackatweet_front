import Sign from "./Sign";
import styles from "../styles/Login.module.css";
import Home from "./Home";
import ModalDialog from "./ModalDialog";
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

import { SIGN_UP, SIGN_IN } from "../modules/common";

function Login() {
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [signInVisible, setSignInVisible] = useState(false);

  const handleModal = (action) => {
    if (action === SIGN_UP) setSignUpVisible(!signUpVisible);
    else setSignInVisible(!signInVisible);
  };

  return (
    <div className={styles.loginContainer}>
      <img
        className={styles.leftContainer}
        src="background_bird.png"
        alt="image twitter"
      />

      <div className={styles.rightContainer}>
        <h1 className={styles.title}>See what's happening</h1>
        <h3 className={styles.otherTitle}>Join Hackatweet today</h3>
        <button
          className={styles.btnSignUp}
          onClick={() => handleModal(SIGN_UP)}
        >
          Sign Up
        </button>
        <Modal show={signUpVisible}>
          <Modal.Body>
            <Sign action={SIGN_UP} closeAction={handleModal}></Sign>
          </Modal.Body>
        </Modal>
        <br />
        <span className={styles.textAlready}>already have an account?</span>
        <br />
        <button
          className={styles.btnSignIn}
          onClick={() => handleModal(SIGN_IN)}
        >
          Sign In
        </button>
        <Modal show={signInVisible}>
          <Modal.Body>
            <Sign action={SIGN_IN} closeAction={handleModal}></Sign>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
export default Login;
