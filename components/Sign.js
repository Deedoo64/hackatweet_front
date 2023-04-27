import styles from "../styles/Sign.module.css";
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
    <div className={styles.main}>
      <div className={styles.container}>
        <span className={styles.btnClose} onClick={onClose}>
          X
        </span>
        <img className={styles.logo} src="logo.png" alt="logo twitter" />
        <h3 className={styles.title}>{title}</h3>
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
            type="password"
            placeholder="Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className={styles.btnSign}>{buttonName}</button>
        </div>
      </div>
    </div>
  );
}

export default Sign;
