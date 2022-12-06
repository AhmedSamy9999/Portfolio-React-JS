import React from "react";
import { NavigationsDots, SocialMedia } from "../components";

const AppWrap = (Components, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Components />

          <div className="copyright">
            <p className="p-text">@2023 Ahmed Samy</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationsDots active={idName} />
      </div>
    );
  };

export default AppWrap;
