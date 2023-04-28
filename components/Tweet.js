// import styles from "../styles/Tweet.module.css";
import styles from "../styles/Tweet.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_API } from "../modules/common";

const MAX_TWEET_LENGTH = 280;

function Tweet() {
  const [text, setText] = useState("");
  const [counter, setCounter] = useState(0);
  const userId = useSelector((state) => state.users.value.id);

  const onTextChanged = (currentText) => {
    const textLength = currentText.length;
    setCounter(textLength);
    if (currentText.length < MAX_TWEET_LENGTH) setText(currentText);
  };

  const saveTweet = (tweet) => {
    fetch(FETCH_API + "/tweets/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: text,
        userId: userId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          // dispatch(
          //   login({ username: username, token: data.token, id: data.userId })
          // );
          setText("");
        } else alert(data.error);
      });
  };

  const saveHTag = (tweet) => {};

  const onTweetClicked = () => {
    const regexp = /#[\w-]+/gi;
    const htags = text.matchAll(regexp);

    saveTweet(text);

    for (let h of htags) saveHTag(h[0]);
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.home}>Home</h2>
      <input
        className={styles.tweet}
        placeholder="What's up ?"
        onChange={(e) => onTextChanged(e.target.value)}
        value={text}
      ></input>
      <div className={styles.footer}>
        <div className={styles.counter}>{counter}/280</div>
        <button className={styles.btn} onClick={onTweetClicked}>
          Tweet
        </button>
      </div>
    </div>
  );
}

export default Tweet;
