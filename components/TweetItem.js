import styles from "../styles/TweetItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
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

      <p className={styles.text}>Welcome to #hackatweet guys 😀</p>
      <FontAwesomeIcon
        className={styles.coeur}
        icon={faHeart}
        style={{ color: "#ffffff" }}
      />
    </div>
  );
}

export default TweetItem;
