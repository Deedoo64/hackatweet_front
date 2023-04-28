import styles from "../styles/HashtagItem.module.css";

function HashtagItem() {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Trends</h2>
      <div className={styles.container}>
        <span className={styles.hashtag}>#hackatweet</span>
        <br />
        <br />
        <span className={styles.nbr}>6 tweets</span>
        <br />
        <br />
        <span className={styles.hashtag}>#lacapsule</span>
        <br />
        <br />
        <span className={styles.nbr}>100 tweets</span>
      </div>
    </div>
  );
}

export default HashtagItem;
