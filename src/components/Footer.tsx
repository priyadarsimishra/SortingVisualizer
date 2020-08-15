import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "../css/Footer.css";
const Footer: React.FC = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <h1 className="footer__createBy">
            Made by <strong>Priyadarsi Mishra</strong>
          </h1>
        </div>
        <div className="footer__contacts">
          <h1 className="footer__contactText">
            Subscribe to <strong>Learn For Fun</strong>
          </h1>
          <a href="https://www.youtube.com/channel/UCkUEgvbJCPFr8VcS5YtCRJA/">
            <YouTubeIcon className="footer__youtubeIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
