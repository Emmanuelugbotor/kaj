import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { WhatsApp } from "@mui/icons-material";

export default function SocialsM() {
  return (
    <div className="social-media-wrapper">
      <a href="https://www.facebook.com/Kejibaus" target={"_blank"}>
        <FacebookIcon className="facebook social-icon size" />
      </a>

      <a href="https://wa.me/2348094396178" target={"_blank"}>
        <WhatsApp className="whatsApp social-icon size" />
      </a>

      <a
        href="https://www.linkedin.com/in/kejibaus-youth-development-initiative-48ba18240"
        target="_blank"
      >
        <LinkedInIcon className="linkedin social-icon size" />
      </a>
    </div>
  );
}
