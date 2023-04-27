import styles from "../styles/Sign.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP, SIGN_IN, FETCH_API } from "../modules/common";
import { login, logout } from "../reducers/user";

function Sign(props) {
  const dispatch = useDispatch();

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

  const onSign = () => {
    if (props.action === SIGN_UP) return doSignUp();

    doSignIn();
  };

  const doSignIn = () => {};

  const doSignUp = () => {
    fetch(FETCH_API + "/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstname,
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: username, token: data.token }));
          setFirstName("");
          setUserName("");
          props.closeAction(props.action);
        }
      });
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
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
            type="text"
            placeholder="Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button className={styles.btnSign} onClick={onSign}>
          {buttonName}
        </button>
        <button className={styles.btnSign} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Sign;
