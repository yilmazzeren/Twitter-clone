import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, userName, verified, text, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://yt3.ggpht.com/ytc/AAUvwngkfbwVHDNX92ii_Av2zuVI_dS6fCsaB4aPLxl4=s900-c-k-c0x00ffffff-no-rj" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Yılmaz ZEREN
              <span>
                <VerifiedUserIcon className="post__badge" /> @ylmzzrn
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Merhaba selam nasılsın</p>
          </div>
        </div>
        <img
          src="https://media4.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif?cid=ecf05e476sq652ae0uiknn61res5oxa30vdlm5extqsp7wg6&rid=giphy.gif"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
