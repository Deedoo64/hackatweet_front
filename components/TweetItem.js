import styles from "../styles/TweetItem.module.css";

function TweetItem() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <img className={styles.oeuf} src="oeuf.png" alt="logo oeuf" />

        <span className={styles.name}>Antoine</span>
        <span className={styles.userName}>@AntoineLeProf</span>
        <span className={styles.point}>.</span>
        <span className={styles.hours}>5 hours</span>
      </div>
      <div className={styles.footer}>
        <p>Welcome to #hackatweet guys 😀</p>
      </div>
    </div>
  );
}

export default TweetItem;
