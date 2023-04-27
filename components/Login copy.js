import SignIn from "./SignIn";
import SignUp from "./SignUp";
import styles from "../styles/Login.module.css";
import Home from "./Home";
import ModalDialog from "./ModalDialog";
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Login() {
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [signInVisible, setSignInVisible] = useState(false);

  const onSignUp = () => {
    setSignUpVisible(!signUpVisible);
    console.log("SignUP in MODAL");
  };

  const onSignIn = () => {
    console.log("SignIN in MODAL");
  };

  const closeSignUp = () => {
    setSignUpVisible(false);
    console.log("   closeSignUp ");
  };

  const closeSignIn = () => {
    setSignInVisible(false);
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
        <button className={styles.btnSignUp} onClick={onSignUp}>
          <Modal show={signUpVisible}>
            <Modal.Body>
              <SignUp></SignUp>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={closeSignUp}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          Sign Up
        </button>
        <br />
        <span className={styles.textAlready}>already have an account?</span>
        <br />
        <button className={styles.btnSignIn} onClick={onSignIn}>
          Sign In
        </button>
        <ModalDialog />
      </div>
    </div>
  );
}
export default Login;
