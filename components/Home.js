import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";
import TweetItem from "./TweetItem";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.home}>
        <div>
          <img className={styles.logo} src="logo.png" alt="logo twitter" />
        </div>

        <div className={styles.userContainer}>
          <img className={styles.oeuf} src="oeuf.png" alt="logo oeuf" />
          <div>
            <span>John</span>
            <br />
            <span>@JohnCena</span>
          </div>
        </div>

        <button className={styles.btn}> logout </button>
      </div>
      <div className={styles.tweet}>
        <Tweet></Tweet>
      </div>
      <div className={styles.lasttweet}>
        <TweetItem />
      </div>
      <div className={styles.trend}></div>
    </div>
  );
}

export default Home;
