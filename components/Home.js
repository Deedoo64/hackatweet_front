import styles from "../styles/Home.module.css";
import Login from "./Login";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.home}>
        <div>
          <img className={styles.logo} src="logo.png" alt="logo twitter" />
        </div>

        <div className={styles.userContainer}>
          <img className={styles.oeuf} src="oeuf.png" alt="logo oeuf" />
          <h2>John</h2>
        </div>
      </div>

      <div className={styles.tweet}></div>
      <div className={styles.lasttweet}></div>
      <div className={styles.trend}></div>
    </div>
  );
}

export default Home;
