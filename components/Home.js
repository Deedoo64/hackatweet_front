import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";
import TweetItem from "./TweetItem";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/users";
import { useEffect, useState } from "react";
import { FETCH_API } from "../modules/common";
import { useRouter } from "next/router";
import moment from "moment";

function Home() {
  const userName = useSelector((state) => state.users.value.username);
  const router = useRouter(); // To change current page
  const [tweetsData, setTweetsData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(FETCH_API + "/tweets/getAll")
      .then((response) => response.json())
      .then((data) => {
        console.log("All tweets");
        console.log(data.tweets);
        setTweetsData(data.tweets);
      });
  }, []);

  const onLogoutClicked = () => {
    dispatch(logout());
    router.push("/"); // Return to the index page
  };

  const buildTweetsJSX = () => {
    console.log("Total tweets length : ", tweetsData.length);
    return tweetsData.map((data, i) => {
      // const isBookmarked = bookmarks.some(
      //   (bookmark) => bookmark.title === data.title
      // );
      const startTime = moment(data.date).format();
      const endTime = moment(Date.now()).format();
      const duration = moment.duration(moment(endTime).diff(startTime));
      const hours = duration.asHours();

      return <TweetItem key={i} from={hours} {...data} />;
    });
  };

  const tweeters = buildTweetsJSX();

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
            <span>@{userName}</span>
          </div>
        </div>

        <button className={styles.btn} onClick={onLogoutClicked}>
          logout
        </button>
      </div>
      <div className={styles.tweet}>
        <Tweet></Tweet>
      </div>
      <div className={styles.lasttweet}>{tweeters}</div>
      <div className={styles.trend}></div>
    </div>
  );
}

export default Home;
