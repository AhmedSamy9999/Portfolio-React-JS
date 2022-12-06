import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/ahmedsamy1222">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/ahmed_techno/">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/profile.php?id=100059466574491">
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
