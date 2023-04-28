import styles from "../styles/Sign.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP, SIGN_IN, FETCH_API } from "../modules/common";
import { login, logout } from "../reducers/users";
import { useRouter } from "next/router"; // To change current page

function Sign(props) {
  const dispatch = useDispatch();
  const router = useRouter();
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

  const doSignIn = () => {
    fetch(FETCH_API + "/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({ username: username, token: data.token, id: data.id })
          );

          setUserName("");
          props.closeAction(props.action);
          router.push("/home");
        } else alert(data.error);
      });
  };

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
          dispatch(
            login({ username: username, token: data.token, id: data.userId })
          );
          setFirstName("");
          setUserName("");
          props.closeAction(props.action);
          router.push("/home");
        } else alert(data.error);
      });
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
          <button className={styles.btnSign} onClick={onSign}>
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sign;
