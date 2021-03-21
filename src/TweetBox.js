import React from "react";
import "./TweetBox.css";
import { Avatar, Button, Input } from "@material-ui/core";
function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://yt3.ggpht.com/ytc/AAUvwngkfbwVHDNX92ii_Av2zuVI_dS6fCsaB4aPLxl4=s900-c-k-c0x00ffffff-no-rj" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetBotton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
