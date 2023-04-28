import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";
import TweetItem from "./TweetItem";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/users";
import { useEffect, useState } from "react";
import { FETCH_API } from "../modules/common";
import { useRouter } from "next/router";

function Home() {
  const userName = useSelector((state) => state.users.value.username);
  const router = useRouter(); // To change current page

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(FETCH_API + "/tweets/getAll")
      .then((response) => response.json())
      .then((data) => {
        console.log("All tweets");
        console.log(data.tweets);
      });
  }, []);

  const onLogoutClicked = () => {
    dispatch(logout());
    router.push("/"); // Return to the index page
  };

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
      <div className={styles.lasttweet}>
        <TweetItem />
      </div>
      <div className={styles.trend}></div>
    </div>
  );
}

export default Home;
