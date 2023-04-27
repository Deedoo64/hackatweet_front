import styles from "../styles/Login.module.css";
import { useEffect, useState } from "react";
import { SIGN_UP, SIGN_IN } from "../modules/common";

function Sign(props) {
  const [firstname, setFirstName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const title =
    props.action === SIGN_UP
      ? "Create your HackaTweet account"
      : "Connect to HackaTweet";

  const buttonName = props.action === SIGN_UP ? "Sign Up" : "Sign In";

  const onClose = () => {
    props.closeAction(props.action);
  };

  return (
    <div className={styles.signUp}>
      <div className={styles.signUpContainer}>
        <img className={styles.logo} src="logo.png" alt="logo twitter" />
        <h3 className={styles.titleSignUp}>{title}</h3>
        <div className={styles.registerSection}>
          {props.action === SIGN_UP && (
            <input
              className={styles.inputField}
              type="text"
              placeholder="First Name"
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstname}
            />
          )}
          <input
            className={styles.inputField}
            type="text"
            placeholder="User Name"
            id="username"
            onChange={(e) => setUserName(e.target.value)}
            value={username}
          />
          <input
            className={styles.inputField}
            type="text"
            placeholder="Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button className={styles.btnSignUp2}>{buttonName}</button>
        <button className={styles.btnSignUp2} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Sign;
