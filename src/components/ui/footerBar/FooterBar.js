import React from "react";
import { Logo } from "../topBar/Logo";
import { Info } from "./Info";
import { Social } from "./Social";

export const FooterBar = () => {
  return (
    <div id="footerBar" className="row px-2 py-2 text-white fixed-bottom">
      <div className="col-lg-4 col-md-2 col-sm-2">
        <Logo viewBox={"-20 0 350 33"} />
      </div>
      <div className="col-md-auto col-sm-3 d-none d-sm-block">
        <Social />
      </div>
      <div className="col-sm d-none d-sm-block text-right">
        <Info />
      </div>
    </div>
  );
};
