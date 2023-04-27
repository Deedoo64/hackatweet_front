import styles from "../styles/Login.module.css";
import { useEffect, useState } from "react";
function SignUp() {
  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [signUpName, setSignUpName] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  return (
    <div className={styles.signUp}>
      <div className={styles.signUpContainer}>
        <img className={styles.logo} src="logo.png" alt="logo twitter" />
        <h3 className={styles.titleSignUp}>Create your Hackatweet account </h3>
        <div className={styles.registerSection}>
          <input
            className={styles.inputField}
            type="text"
            placeholder="firstname"
            id="signUpFirstname"
            onChange={(e) => setSignUpFirstname(e.target.value)}
            value={signUpFirstname}
          />
          <input
            className={styles.inputField}
            type="text"
            placeholder="name"
            id="signUpName"
            onChange={(e) => setSignUpName(e.target.value)}
            value={signUpName}
          />
          <input
            className={styles.inputField}
            type="text"
            placeholder="password"
            id="signUpPassword"
            onChange={(e) => setSignUpPassword(e.target.value)}
            value={signUpPassword}
          />
        </div>
        <button className={styles.btnSignUp2}>Sign Up</button>
        <button className={styles.btnSignUp2}>Close</button>
      </div>
    </div>
  );
}

export default SignUp;
