// import styles from "../styles/Tweet.module.css";
import styles from "../styles/Tweet.module.css";
import { useEffect, useState } from "react";

const MAX_TWEET_LENGTH = 280;

function Tweet() {
  const [text, setText] = useState("");
  const [counter, setCounter] = useState(0);

  const onTextChanged = (currentText) => {
    const textLength = currentText.length;
    setCounter(textLength);
    if (currentText.length < MAX_TWEET_LENGTH) setText(currentText);
  };

  const onTweetClicked = () => {
    const regexp = /#[\w-]+/gi;

    const htags = [...text.matchAll(regexp)];
    console.log("Found ", htags.length, " Htags ");
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.home}>Home</h1>
      <input
        className={styles.tweet}
        placeholder="What's up ?"
        onChange={(e) => onTextChanged(e.target.value)}
        value={text}
      ></input>
      <div className={styles.footer}>
        <div className={styles.counter}>{counter}/280</div>
        <button onClick={onTweetClicked}>Tweet</button>
      </div>
    </div>
  );
}

export default Tweet;
