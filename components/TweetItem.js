import styles from "../styles/TweetItem.module.css";

function TweetItem() {
  return (
    <div className={styles.main}>
      <img className={styles.oeuf} src="oeuf.png" alt="logo oeuf" />
      <div className={styles.userInfo}>
        <span className={styles.name}>Antoine</span>
        <span>@AntoineLeProf</span>
      </div>
    </div>
  );
}

export default TweetItem;
