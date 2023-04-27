import SignIn from "./SignIn";
import SignUp from "./SignUp";
import styles from "../styles/Login.module.css";
import Home from "./Home";

function Login() {
  const onSignUp = () => {
    console.log("SignUP");
  };

  const onSignIn = () => {
    console.log("SignIN");
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
          Sign Up
        </button>
        <br />
        <span className={styles.textAlready}>already have an account?</span>
        <br />
        <button className={styles.btnSignIn} onClick={onSignIn}>
          Sign In
        </button>
      </div>
    </div>
  );
}
export default Login;
