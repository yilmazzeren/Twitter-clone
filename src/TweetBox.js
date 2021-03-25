import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button, Input } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Yılmaz ZEREN",
      userName: "ylmzzrn",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://yt3.ggpht.com/ytc/AAUvwngkfbwVHDNX92ii_Av2zuVI_dS6fCsaB4aPLxl4=s900-c-k-c0x00ffffff-no-rj",
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://yt3.ggpht.com/ytc/AAUvwngkfbwVHDNX92ii_Av2zuVI_dS6fCsaB4aPLxl4=s900-c-k-c0x00ffffff-no-rj" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetBotton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
